import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

export default function ingredientsDeliveryDetailPage() {
    const router = useRouter();
    
    const fetchSalePostData = async () => {
        const response = await axios.get(`http://localhost:8081/sale/posts/${router.query.salePostId}`);
        return response.data;
      };
    
    // State Variables
    const [openModal, setModal] = useState(false);
    
    // UseQuery
    const { data, error, isLoading } = useQuery({
        queryKey: ['salePosts'],
        queryFn: fetchSalePostData,
        select: (data) => data.data,
    });

    console.log(data);

    // Helper Functions
    const toggleModal = () => {
        setModal(!openModal);
    }
    
    return (
        <div className="w-full">
            {openModal &&
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                    onClick={toggleModal}>
                    <div
                        className='w-[40rem] h-[30rem] bg-white shadow-lg border border-black rounded-[0.875rem]
                        flex flex-col items-center justify-center gap-6 px-[10.421875rem] pb-8'
                        onClick={(e) => e.stopPropagation()}>
                        <p className="weight-700 text-[1.375rem]">구매 요청</p>

                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex flex-col">
                                <label className="text-[1rem] weight-700 pb-1">전화번호</label>
                                <input type="text"
                                       className="rounded-[0.7rem] w-[21.4878125rem] h-[2.8rem] bg-[#F1F1F1] px-[1.205rem]"
                                       placeholder="전화번호를 입력해주세요"></input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[1rem] weight-700 pb-1">이메일</label>
                                <input type="text"
                                       className="rounded-[0.7rem] w-[21.4878125rem] h-[2.8rem] bg-[#F1F1F1] px-[1.205rem]"
                                       placeholder="이메일을 입력해주세요"></input>
                            </div>
                        </div>

                        <button
                            className="rounded-[0.5rem] weight-700 px-[7rem] py-[0.8rem] bg-[#FFA500] text-[1rem] text-[white]">
                            구매하기
                        </button>
                    </div>
                </div>
            }

            <div className="flex flex-col items-center min-h-screen min-w-[76.6rem] bg-[#FFA500]">
                {/* 상단 메뉴 */}
                <div className="flex flex-col items-center">
                    <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주의 밤 🌲</h1>
                    <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/certificationBoardList')}>SNS 인증게시판
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/quoteTalkList')}>견적톡
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/accommodateReservation')}>숙소 예약
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/campingReservation')}>캠핑장 예약
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                            onClick={() => router.push('/ingredientsDelivery')}>지역 재료 직배송
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/reservationAuth')}>예약 조회
                        </button>
                    </div>
                </div>

                {/* 컨텐츠 영역 */}
                <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[4rem] bg-white">
                    <div className='flex gap-16'>
                        <img src='/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png' alt='campingDetail'
                             className='w-[25rem] h-[25rem] rounded-[0.875rem]'/>

                        <div className='flex flex-col justify-center gap-4'>
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2.5">
                                        <p className="text-[1.5rem] weight-700">{data?.name}</p>
                                        <p className="text-[1.125rem] weight-600">⭐ ️{data?.rating}</p>
                                    </div>
                                    <p className="weight-500 text-[#404040] whitespace-pre-line">{data?.shortDescription}</p>
                                </div>

                                <div className="flex justify-end w-full">
                                    <p className="weight-700 text-[1.25rem]">{data?.price}원</p>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center pb-[1rem]'>
                                <hr/>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">상품 정보</p>
                                <p className="weight-500 text-[#404040] whitespace-pre-wrap">{data?.detailedDescription}</p>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">판매자</p>
                                <p className="weight-500 text-[#404040]">{data?.sellerName}</p>
                            </div>

                            <button
                                className="rounded-[8px] weight-700 w-full py-[1rem] bg-[#FFA500] text-[white] text-[1.2rem]"
                                onClick={()=>{toggleModal();}}
                            >
                                구매하기
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}