import {useRouter} from "next/router";
import React from "react";

/**
 * Ingredients Delivery Page
 * @since 2024.11.25
 * @author 권민지
 */
export default function ingredientsDeliveryPage() {
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
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.5rem] bg-white">
                <div className='flex flex-col justify-center'>
                    {/* 상단 카테고리, 글쓰기 */}
                    <div className='flex justify-between px-1.5 pb-8'>
                        <div className='flex justify-between gap-4'>
                            <div
                                className='w-[5.375rem] py-[0.25rem] border-2 border-solid border-[#F18304] bg-[#FFEECE] rounded-lg text-[#F18304] text-center weight-600
                                hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>채소
                            </div>
                            <div
                                className='w-[5.375rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] text-center weight-600
                                hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>과일
                            </div>
                            <div
                                className='w-[5.375rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] text-center weight-600
                                hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>정육
                            </div>
                            <div
                                className='w-[5.375rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] text-center weight-600
                                hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>밀키트
                            </div>
                        </div>
                        <div
                            className='border-2 border-solid border-[#FFA500] rounded-lg text-[#FFA500] py-[0.25rem] px-4 text-center weight-700
                            hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'
                            onClick={() => router.push('/survey1')}>맞춤형 식사 추천 받으러가기
                        </div>
                    </div>
                    <div className='flex flex-col rounded-[0.9125rem] w-[57.375rem] pb-[5rem]'>
                        {/* 리스트 */}
                        <div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png"
                                             className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">깻잎 30g</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.47</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                믿고 먹을 수 있는 깻잎을 합리적인 가격에!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">남산채소</p>
                                    <p className="text-[1.05rem] weight-800">1,490원</p>
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
                                        <img src="/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png"
                                             className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">깻잎 30g</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.47</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                믿고 먹을 수 있는 깻잎을 합리적인 가격에!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">남산채소</p>
                                    <p className="text-[1.05rem] weight-800">1,490원</p>
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
                                        <img src="/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png"
                                             className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">깻잎 30g</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.47</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                믿고 먹을 수 있는 깻잎을 합리적인 가격에!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">남산채소</p>
                                    <p className="text-[1.05rem] weight-800">1,490원</p>
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
                                        <img src="/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png"
                                             className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">깻잎 30g</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.47</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                믿고 먹을 수 있는 깻잎을 합리적인 가격에!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">남산채소</p>
                                    <p className="text-[1.05rem] weight-800">1,490원</p>
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
                                        <img src="/images/localIngredientsThumbs/vegetableThumbs/vegetable_1.png"
                                             className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                    </div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-3 pt-[8px]'>
                                                <p className="weight-700 text-[1.2rem]">깻잎 30g</p>
                                                <p className='text-[0.9rem] weight-500'>⭐ 4.47</p>
                                            </div>
                                            <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                믿고 먹을 수 있는 깻잎을 합리적인 가격에!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className="text-[0.9rem] text-[#404040] weight-500">남산채소</p>
                                    <p className="text-[1.05rem] weight-800">1,490원</p>
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