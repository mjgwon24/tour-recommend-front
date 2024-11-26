import React from "react";

export default function campingDetail() {
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
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
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
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.5rem] pb-[7rem] bg-white">
                <div className='flex flex-col justify-center gap-4'>
                    <img src='/images/campingThumbs/thumb1.png' alt='campingDetail'
                         className='w-[46.875rem] h-[28.125rem] rounded-[0.875rem]'/>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2.5">
                            <p className="text-[1.5rem] weight-700">밤부사운드 캠핑장</p>
                            <p className="text-[1.125rem] weight-600">⭐ ️4.5</p>
                        </div>
                        <p className="weight-500 text-[#404040]">경상북도 경주시 남산예길 99-4 (남산동)</p>
                    </div>

                    <div className='flex flex-col justify-center py-[1rem]'>
                        <hr/>
                    </div>

                    <div className="flex flex-col gap-1 mb-[20px]">
                        <p className="text-[1.2rem] weight-700">기본 정보</p>
                        <p className="weight-500 text-[#404040]">
                            - 인원 : 기준 2명 / 최대 4명<br/>
                            - 기준인원 초과 시 1인당 15,000원 추가됩니다.<br/>
                            - 객실 정보: 원룸형 / 15평<br/>
                            - 구비 시설: 침대, 에어컨, TV, 냉장고, 전자레인지, 화장지, 드라이기, 수저, 컵 , 접시<br/>
                        </p>
                    </div>

                    <div className="flex flex-col rounded-[1.375rem] border border-[#989898] py-[1.34rem] px-[1.875rem]">
                        <div className="flex flex-col gap-2.5">
                            <div>
                                <p className="weight-600 text-[1rem]">
                                    숙박
                                </p>
                                <p className="weight-500 text-[#404040]">
                                    체크인 15:00 ~ 체크아웃 11:00
                                </p>
                            </div>

                            <div>
                                <p className="weight-600 text-[1rem]">
                                    체크인 날짜
                                </p>
                                <div className="flex items-center gap-2.5 py-[0.375rem]">
                                    <div className="flex items-center gap-1.5">
                                        <div
                                            className="rounded-[0.5rem] border border-[#404040] px-[0.9375rem] py-[0.15rem]">
                                            <p className="weight-500 text-[#404040]">11.24</p>
                                        </div>

                                        <p className="weight-500 text-[#404040]">-</p>

                                        <div
                                            className="rounded-[0.5rem] border border-[#404040] px-[0.9375rem] py-[0.15rem]">
                                            <p className="weight-500 text-[#404040]">11.25</p>
                                        </div>
                                    </div>
                                    <p className="weight-500 text-[#404040]">1박</p>
                                </div>
                            </div>

                            <div>
                                <p className="weight-600 text-[1rem]">
                                    남은 방
                                </p>
                                <p className="weight-500 text-[#404040]">
                                    3개
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-1 items-end">
                            <p className="txt-[1.125rem] weight-800">
                                75,000원
                            </p>
                            <button
                                className="rounded-[8px] weight-700 px-[25px] py-[0.27rem] bg-[#FFA500] text-[white]">
                                예약하기
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}