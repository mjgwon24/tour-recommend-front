import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * quoteTalkListPage ui
 * @author 김이현
 */


 export default function quoteTalkListPage() {

    const [selectedCategory,setSelectedCategory] = useState("room");
    const router = useRouter();



    return(
        <>
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
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
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
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

                <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[0.9375rem] bg-white">
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col rounded-[0.9125rem] py-[1.75rem] w-[57.375rem]'>
                            {/* 상단 카테고리, 글쓰기 */}
                            <div className='flex justify-end pb-8'>
                                <div
                                    className='border-2 border-solid border-[#000] rounded-lg text-[#000] py-1 px-4 cursor-pointer'
                                    onClick={() => router.push('/certificationBoard')}>글작성
                                </div>
                            </div>

                            {/* 후기글들 */}
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>견적 요청합니다</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.665rem] text-[#878787]'>의견 4</div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>견적 요청 관련 문의 어쩌고 저쩌고...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>


                            <div className='flex justify-center gap-2 cursor-pointer'>
                                <div className='text-[0.665rem] text-base'>1</div>
                                <div className='text-[0.665rem] text-base'>2</div>
                                <div className='text-[0.665rem] text-base'>3</div>
                                <div className='text-[0.665rem] text-base'>4</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}