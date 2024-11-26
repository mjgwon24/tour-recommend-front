import {useRouter} from "next/router";
import React, {useState} from "react";

export default function ingredientsDeliveryDetailPage() {
    const router = useRouter();
    const [openModal, setModal] = useState(false);
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
                            onClick={() => router.push('/allCourses')}>예약 조회
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
                                        <p className="text-[1.5rem] weight-700">깻잎 30g</p>
                                        <p className="text-[1.125rem] weight-600">⭐ ️4.5</p>
                                    </div>
                                    <p className="weight-500 text-[#404040]">믿고 먹을 수 있는 깻잎을 합리적인 가격에!</p>
                                </div>

                                <div className="flex justify-end w-full">
                                    <p className="weight-700 text-[1.25rem]">4,500원</p>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center pb-[1rem]'>
                                <hr/>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">상품 정보</p>
                                <p className="weight-500 text-[#404040]">
                                    - 포장타입 : 냉장 (종이 포장)<br/>
                                    - 판매단위 : 1박스<br/>
                                    - 중량/용량 : 2.5kg 내외<br/>
                                    - 소비기한 : 농산물이므로 별도의 소비기한은 없으나 가급적 빠르게 드시기 바랍니다.<br/>
                                    - 안내사항 :<br/>
                                    식품 특성상 중량은 3% 내외의 차이가 발생할 수 있습니다.<br/>
                                    신선식품 특성상 원물마다 크기 및 형태가 일정하지 않을 수 있습니다.
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">판매자</p>
                                <p className="weight-500 text-[#404040]">
                                    경주농장
                                </p>
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