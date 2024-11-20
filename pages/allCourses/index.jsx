import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * allCoursesPage ui
 * @author 김이현
 */


export default function allCoursesPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <>

            <div className="flex flex-col gap-[1.28875rem] bg-[#FFA500] min-h-screen min-w-[76.6rem] w-full">
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
                                <p className="text-base text-[#FFA500] weight-700">발자국 해시태그</p>
                            </div>
                        </div>

                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/discountCoupon')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700">할인 쿠폰</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer flex justify-center bg-[#F18304] rounded-[0.875rem]"
                            onClick={() => router.push('/allCourses')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFF] weight-700 hover:text-[#FFA500]">코스 모두 보기</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/review')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700">후기</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col w-full gap-[3.11125rem] bg-[#ffffff] rounded-t-[1.33125rem] px-[4.354375rem] pb-[18.370625rem] pt-[6.026875rem] min-w-[76.6875rem]" onClick={()=>{toggleModal}}>
                        <div className='flex justify-center'>
                            <div className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                                <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                                <div className='flex justify-center gap-[1.75rem]'>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                                <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                                <div className='flex justify-center gap-[1.75rem]'>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                                <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                                <div className='flex justify-center gap-[1.75rem]'>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center h-[5.6109375rem]'>
                                            <div className='flex flex-col justify-center'>
                                                <img src="/images/icon/vector_right_brown.png" className='w-[1rem] h-[0.9375rem]'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                            <img className='rounded-[0.875rem]' src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                        </div>
                                        <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                        <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </>
    )
}