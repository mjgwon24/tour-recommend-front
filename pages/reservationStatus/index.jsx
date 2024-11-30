import {useRouter} from "next/router";
import React from "react";

export default function reservationStatusPage() {
    const router = useRouter();

    return (
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
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/ingredientsDelivery')}>지역 재료 직배송
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen py-[3rem] bg-white">
                <div className='flex flex-col gap-10'>
                    <div className="flex flex-col gap-1">
                        <p className="text-[1.5rem] weight-700">나의 예약 현황</p>
                        <p className="text-[#404040] weight-500">예약 취소를 원하실 경우, 해당 숙소로 문의해주세요.</p>
                    </div>

                    <div className='flex flex-col w-[57.375rem]'>
                        {/* 리스트 */}
                        <div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/campingThumbs/thumb1.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className='weight-700 text-[1.2rem] text-[#FFA500]'>숙소</p>
                                                <p className="weight-700 text-[1.2rem]">밤부사운드 캠핑장</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경상북도 경주시 천북면 갈곡삼막길 14-21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end items-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-600">숙박일 11.24 ~ 11.25</p>
                                    <button
                                        className="rounded-[0.5rem] weight-600 w-[5.3125rem] py-[0.3rem] bg-[#FFA500] text-[white] text-[0.875rem]">
                                        예약완료
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/campingThumbs/thumb1.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className='weight-700 text-[1.2rem] text-[#FFA500]'>숙소</p>
                                                <p className="weight-700 text-[1.2rem]">밤부사운드 캠핑장</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경상북도 경주시 천북면 갈곡삼막길 14-21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end items-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-600">숙박일 11.24 ~ 11.25</p>
                                    <button
                                        className="rounded-[0.5rem] weight-600 w-[5.3125rem] py-[0.3rem] bg-[#7C7C7C] text-[white] text-[0.875rem]">
                                        예약취소
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}