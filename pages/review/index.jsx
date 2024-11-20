import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * reviewPage ui
 * @author 김이현
 */


export default function reviewPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <>

            <div className="flex flex-col gap-[1.28875rem] bg-[#FFA500]">
                <div className="flex flex-col items-center gap-1 pt-[4.15625rem] pb-[1.113125rem]">
                    <p className="text-center text-[2.0625rem] weight-700 text-white leading-[3.375rem]">
                        경주 맞춤형 관광지 코스 제공 서비스
                    </p>
                </div>

                <div className="flex flex-col items-center gap-[1.28875rem]">
                    <div className="flex justify-center gap-[1.371875rem] pb-[0.86875rem]">
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/footingPost')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFA500] weight-700 text-[0.914375rem]">발자국 해시태그</p>
                            </div>
                        </div>

                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/discountCoupon')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700 text-[0.914375rem]">할인 쿠폰</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/allCourses')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFA500] weight-700 text-[0.914375rem]">코스 모두 보기</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer bg-[#F18304] hover:text-[#FFA500] hover:bg-[#FFF] flex justify-center rounded-[0.875rem]"
                            onClick={() => router.push('/review')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFF] weight-700 hover:text-[#FFA500] text-[0.86rem]">후기</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col w-full gap-[3.11125rem] bg-[#ffffff] rounded-t-[1.33125rem] px-[8.354375rem] pb-[18.370625rem] pt-[3.075625rem] min-w-[76.6875rem]" onClick={()=>{toggleModal}}>
                        <div className='flex flex-col rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem] min-w-[70rem]'>
                            {/* 상단 카테고리, 글쓰기 */}
                            <div className='flex justify-between pb-8'>
                                <div className='flex justify-between gap-4'>
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>식당</div>
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>숙박</div>
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>전시</div>
                                </div>
                                <div className='border-2 border-solid border-[#000] rounded-lg text-[#000] py-1 px-4 cursor-pointer' onClick={() => router.push('/reviewWrite')}>글작성</div>
                            </div>

                            {/* 후기글들 */}
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10</div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>


                            <div className='flex justify-center gap-2 cursor-pointer'>
                                <div className='text-[10.64px] text-base'>1</div>
                                <div className='text-[10.64px] text-base'>2</div>
                                <div className='text-[10.64px] text-base'>3</div>
                                <div className='text-[10.64px] text-base'>4</div>
                            </div>

                            
                        </div>


                            
                        
                    </div>
                </div>
            </div>
        </>
    )
}