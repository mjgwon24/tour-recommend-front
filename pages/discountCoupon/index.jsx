import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * discountCoupon ui
 * @author 김이현
 */


export default function discountCouponPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <>
        <button
        id="modalbtn"
        className='hidden'
        onClick={toggleModal}></button>
        <div>
          {openModal &&
            <div className='fixed top-0 left-0 w-full h-full bg-[#333333]/60 flex justify-center items-center z-99'>
                <label htmlFor='modalbtn'>
                    <div className='w-[42.809375rem] h-[30.09125rem] bg-white shadow-lg py-2 rounded-md flex flex-col px-[10.421875rem]'>
                        <div className='flex justify-center pt-[2.451875rem]'>
                            <div className='bg-[#999999] w-[8.3125rem] h-[8.3125rem] rounded-full'></div>
                        </div>
                        <div className='flex justify-center mt-[1.16375rem] mb-[1.33rem] gap-1'>
                            <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                식품
                            </div>
                            <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                        </div>
                        <p className='w-[21.9865625rem]'>위치: 경상북도 경주시 ... 어디고 어쩌고어디고 어쩌고어디고 어쩌고어디고 어쩌고</p>

                        <div className='flex justify-center mt-[2.66rem]'>
                            <div className='flex flex-col justify-center bg-[#F3F3F3] rounded-2xl w-[21.11375rem] h-[4.2809375rem] px-[2.95125rem] py-[0.62375rem] text-center text-[#272727] text-[1rem]'>
                                직원분에게 해당 쿠폰을 제시해주세요. 현장에서 즉시 할인됩니다.😊
                            </div>
                        </div>
                    </div>
                </label>
            </div>
          }
          </div>
        <div className="bg-[#FFA500] justify-items-center content-center static z-0">
            <div className="flex flex-col w-[81.25rem] gap-[1.28875rem] pb-[5.625rem]">
                <div className="flex flex-col items-center gap-1 pt-[4.15625rem] pb-[1.113125rem]">
                    <p className="text-center text-[2.0625rem] weight-700 text-white leading-[3.375rem]">
                        경주 맞춤형 관광지 코스 제공 서비스
                    </p>
                </div>

                <div className="flex flex-col items-center gap-[1.28875rem]">
                    <div className="flex justify-center gap-[1.371875rem] pb-[0.86875rem]">
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#f3efe7] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/footingPost')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFA500] weight-700">발자국 해시태그</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#f3efe7] flex justify-center bg-[#F18304] rounded-[0.875rem]"
                            onClick={() => router.push('/discountCoupon')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFF] weight-700 hover:text-[#FFA500]">할인 쿠폰</p>
                            </div>
                        </div>

                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#f3efe7] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/allCourses')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700">코스 모두 보기</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#f3efe7] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/review')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700">후기</p>
                            </div>
                        </div>
                    </div>
                    
                    

                    <div className="flex flex-col gap-[2.410625rem] bg-[#ffffff] rounded-[0.875rem] px-[8.354375rem] pb-[18.370625rem] pt-[6.026875rem]" onClick={()=>{toggleModal}}>
                        <div className='flex gap-[1.7875rem]'>
                            <label htmlFor='modalbtn'>
                                <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`}>
                                    <div className='flex flex-col justify-center px-[1.07625rem]'>
                                        <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                                    </div>
                                    <div className='flex flex-col justify-center w-[17.733125rem]'>
                                        <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                            식품
                                        </div>
                                        <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                        <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                                    </div>
                                    <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                        <div className='flex justify-center'>
                                            <img src="/images/icon/download.png" className='w-[1.5625rem] h-[1.3125rem]'/>
                                            </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor='modalbtn'>
                                <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`}>
                                    <div className='flex flex-col justify-center px-[1.07625rem]'>
                                        <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                                    </div>
                                    <div className='flex flex-col justify-center w-[17.733125rem]'>
                                        <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                            식품
                                        </div>
                                        <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                        <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                                    </div>
                                    <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                        <div className='flex justify-center'>
                                            <img src="/images/icon/download.png" className='w-[1.5625rem] h-[1.3125rem]'/>
                                            </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className='flex gap-[1.7875rem]'>
                            <label htmlFor='modalbtn'>
                                <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`}>
                                    <div className='flex flex-col justify-center px-[1.07625rem]'>
                                        <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                                    </div>
                                    <div className='flex flex-col justify-center w-[17.733125rem]'>
                                        <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                            식품
                                        </div>
                                        <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                        <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                                    </div>
                                    <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                        <div className='flex justify-center'>
                                            <img src="/images/icon/download.png" className='w-[1.5625rem] h-[1.3125rem]'/>
                                            </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor='modalbtn'>
                                <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`}>
                                    <div className='flex flex-col justify-center px-[1.07625rem]'>
                                        <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                                    </div>
                                    <div className='flex flex-col justify-center w-[17.733125rem]'>
                                        <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                            식품
                                        </div>
                                        <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                        <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                                    </div>
                                    <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                        <div className='flex justify-center'>
                                            <img src="/images/icon/download.png" className='w-[1.5625rem] h-[1.3125rem]'/>
                                            </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}