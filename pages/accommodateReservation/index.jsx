import {useRouter} from "next/router";
import React from "react";

/**
 * Accommodate Reservation Page
 * @since 2024.11.24
 * @author 권민지
 */
export default function accommodateReservationPage() {
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
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
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
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/allCourses')}>예약 조회
                    </button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[1.3rem] bg-white">
                <div className='flex justify-center'>
                    <div className='flex flex-col rounded-[0.9125rem] py-[1.75rem] w-[57.375rem]'>
                        {/* 리스트 */}
                        <div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/accommodateThumb/thumb1.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">오소한옥</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.4</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경상북도 경주시 남산예길 99-4 (남산동)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                    <p className="text-[1.05rem] weight-800">75,000원</p>
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
                                        <img src="/images/accommodateThumb/thumb2.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">한옥인</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.3</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경주시 포석로1050번길 19 (황남동)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                    <p className="text-[1.05rem] weight-800">68,000원</p>
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
                                        <img src="/images/accommodateThumb/thumb3.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">휴휴당</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.5</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경주시 첨성로99번길 25-10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                    <p className="text-[1.05rem] weight-800">87,000원</p>
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
                                        <img src="/images/accommodateThumb/thumb4.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">춘추관 한옥펜션</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.37</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경주시 대경로 4821-5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                    <p className="text-[1.05rem] weight-800">78,000원</p>
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
                                        <img src="/images/accommodateThumb/thumb5.png"
                                             className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">원화루</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.35</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                경주시 포석로 828-21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                    <p className="text-[1.05rem] weight-800">81,000원</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                        </div>

                        <div className='flex justify-center gap-2 cursor-pointer'>
                            <p className='text-[1rem] weight-600'>1</p>
                            <p className='text-[1rem] text-[#6C6C6C] hover:text-black'>2</p>
                            <p className='text-[1rem] text-[#6C6C6C] hover:text-black'>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}