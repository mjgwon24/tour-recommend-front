import {useRouter} from 'next/router';

export default function homePage() {
    const router = useRouter();

    return(
        <div className="flex flex-col bg-[#FFA500] w-screen h-screen min-w-[76.6875rem] min-h-[38.875rem] items-center justify-center content-center">
            <div className="flex flex-col w-[76.6875rem] gap-[50px] pb-[1rem] pt-[124px]">
                <div className="flex flex-col items-center gap-5">
                    <p className="text-center text-[2.75rem] weight-700 text-white leading-[3.375rem]">
                        경주의 밤🌲
                    </p>
                    <div>
                        <p className="text-center text-[1.5rem] weight-500 text-white leading-[1.9375rem]">
                            낭만 한옥, 자연 속 캠핑, 황리단길의 맛집 밀키트까지!
                        </p>
                        <p className="text-center text-[1.5rem] weight-500 text-white leading-[1.9375rem]">
                            경주에서 새로운 경험과 가치를 만들어 보세요.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-[90px]">
                    <div className="cursor-pointer hover:bg-[#f3efe7] flex items-center gap-[0.375rem] bg-white py-4 px-14 rounded-[0.875rem]"
                         style={{boxShadow: "0rem 0.8728125rem 1.6625rem 0.083125rem #C7760D"}}
                         onClick={() => router.push('/survey1')}
                    >
                        <p className="text-[1.3125rem] text-[#FF7700] weight-700">경주 여정 떠나기</p>
                        <img src="/images/icon/vector_right_orange.png"
                             className="w-[0.9375rem] h-[0.9375rem]" alt="->"/>
                    </div>

                    <div className="flex flex-col gap-2.5 px-8 pb-10">
                        <div className="flex gap-[1px] items-start justify-between max-w-[68.75rem] text-[#FFF] h-[194px]">
                            <div className='w-[366px]'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[22px] font-bold leading-[31px]'>POINT 1</div>
                                    <div className='text-[22px] font-bold leading-[31px]'>지역 농가와의 직거래로</div>
                                    <div className='text-[22px] font-bold leading-[31px] pb-[12px]'>신선한 식자재를 저렴하게 직배송!</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>농가의 신선함을 담은 식재료를</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>빠르고 저렴하게 즐길 수 있어요.</div>
                                </div>
                            </div>
                            <div className='w-[366px] border-x border-white'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[22px] font-bold leading-[31px]'>POINT 2</div>
                                    <div className='text-[22px] font-bold leading-[31px]'>숙소 예약부터 식자재,</div>
                                    <div className='text-[22px] font-bold leading-[31px] pb-[12px]'>밀키트까지 원스톱으로!</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>숙소 예약과 함께 식자재 배송, 밀키트 구매</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>서비스를 원스톱으로 제공받으실 수 있어요.</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>AI 기반 메뉴 추천은 덤!</div>
                                </div>
                            </div>
                            <div className='w-[366px]'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[22px] font-bold leading-[31px]'>POINT 3</div>
                                    <div className='text-[22px] font-bold leading-[31px]'>내가 남긴 건 추억,</div>
                                    <div className='text-[22px] font-bold leading-[31px] pb-[12px]'>경주에 남긴 건 깨끗함!</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>쓰레기 처리 인증 이벤트로</div>
                                    <div className='text-[16px] font-medium leading-[26px]'>깨끗한 여행 문화를 함께 만들어가요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}