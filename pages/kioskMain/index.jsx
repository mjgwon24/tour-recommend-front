import { useEffect, useState } from "react";
import {useRouter} from "next/router";

export default function kioskMainPage() {
    const router = useRouter();
    const [MoveEvent,setEvent] = useState(false);
    const [SelectedImage,setSelectedImage] = useState(2);
    
    const [Images,setImages] = useState(
        [
            "/images/kiosk/thumb1.png",
            "/images/kiosk/thumb2.png",
            "/images/kiosk/thumb3.png",
            "/images/kiosk/thumb4.png",
            "/images/kiosk/thumb5.png"]);
    const nextImage = () => {
        setEvent(true)
        setSelectedImage((SelectedImage+1)%(Images.length))
        setTimeout(()=>{
            setEvent(false);
            setImages((prevArray) => {
            const last = prevArray[prevArray.length - 1];
            const rest = prevArray.slice(0, -1);
            return [last, ...rest];
          });},500)

        
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();

        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [Images,SelectedImage]);
    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-[#FFA50088] from-0% to-[#FF4D0188] to-100% bg-[#FFA500] pt-[106.4px] pb-[35px] px-[40px] min-w-[1280px] min-h-screen">
            
            <div className="flex flex-col text-[#FFF] text-center pb-[60px]">


                    <div className="flex flex-col w-[905.5px] h-[101.8px]">
                        <div className="relative bottom-[0%] z-20 w-[905.5px] h-[101.8px]">
                            <div className="flex flex-col justify-center">
                                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                                    <p>나에게</p>
                                    <p className="text-[#3E2B0A] text-[79.8px] font-black">딱!</p>
                                    <p>맞는</p>
                                    <p className="text-[#000000] text-[79.8px] font-black">여행지</p>
                                    <p>다녀오고</p>
                                </div>
                            </div>
                        </div>
                        <img src="/images/icon/stress_line.png" className="relative bottom-[100%] left-[354.25px] w-[342.5px] h-[101.8px] px-[5px] py-[5px] resize-none"/>
                    </div>


                    
                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                    <p>지역페이</p>
                    <p className="text-[#3E2B0A] text-[79.8px] font-black">경품</p>
                    <p>받아가자!</p>
                </div>
            </div>
            <div className="flex flex-col w-[1200px] rounded-[14.63px] bg-[#FFB020] pt-[10px] pr-[23.27px] pl-[22.61px] pb-[27px]">
                <div className="flex justify-start pb-[20px]">
                    <div className="text-[#FFF] text-[26.6px] font-extrabold">
                        여행지 미리보기
                    </div>
                </div>

                <div className="flex gap-2 justify-center h-[480px]">
                    {
                        Images.map((data,index)=>{
                            return (
                                <div className="flex flex-col items-center justify-center">
                                    <img class={`box box${index} ${MoveEvent?`effect${index}`:""}`} src={data}/>
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="flex gap-2 justify-center text-[#FFF] pt-4">
                    {
                        Images.map((data,index)=>{
                            return (
                                <div>{SelectedImage==index?"●":"○"}</div>
                            )
                        })
                    }
                </div>
                
            </div>
            <div className="flex flex-col w-[1200px] rounded-[14.63px] bg-[#FFF] pt-[47.21px] px-[100px] pb-[110px] mt-[16.63px] gap-[30px]">
                <div className="flex justify-center gap-[12.63px]">
                    <img className="w-[53.2px] h-[53.2px]" src="/images/icon/instagram_icon.png"></img>
                    <div className="flex flex-col justify-center">
                        <div className="text-[37.24px] font-bold">태그 이벤트 참여 방법</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-start gap-3">
                        <img className="w-[33.25px] h-[33.25px]" src="/images/icon/step1_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] font-semibold">태그 이벤트는 “숙소 방문 인증"과 “쓰레기 처리 인증" 총 2가지로, 참여하고 싶은 이벤트를 골라주세요</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3">
                        <img className="w-[33.25px] h-[33.25px]" src="/images/icon/step2_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] font-semibold">숙소 방문 인증의 경우, 경주의 밤 플랫폼에서 제공하는 숙소에 한해 방문 인증 사진을 찍어주세요.</p>
                            <p className="text-[23.94px] font-semibold">쓰레기 처리 인증의 경우, 분리수거를 완료한 인증 사진을 찍어주세요.</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3">
                        <img className="w-[33.25px] h-[33.25px]" src="/images/icon/step3_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] font-semibold">개인 인스타그램에서 촬영한 사진을 업로드하여 <span className="text-[#006EFF] font-bold">태그 인증</span>을 해주세요</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3">
                        <img className="w-[33.25px] h-[33.25px]" src="/images/icon/step4_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] font-semibold">인증 게시판에서 개인 인스타임을 인증해주세요!</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-[37.24px] font-bold pt-[66.75px]">
                    <p>🎁</p>
                    <p className="text-[#FF6102] px-2">1개</p>
                    <p>인증시 지역페이</p>
                    <p className="text-[#FF6102] pl-2">1만원</p>
                    <p>,</p>
                    <p className="text-[#FF6102] px-2">모두</p>
                    <p>인증시 지역페이</p>
                    <p className="text-[#FF6102] px-2">2만원</p>
                    <p>증정!</p>
                </div>
                <div className="flex justify-center pt-[17.75px] pb-[43.82px]">
                    <button className="w-[442.219px] h-[98.093px] rounded-[14.63px] border-[3.325px] border-[#FF6102] bg-white text-[31.92px] font-bold text-[#FF6102]"
                    style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} onClick={() => router.push('/home')}>경주의 밤 바로가기 -&gt;</button>
                </div>
                <div className="flex justify-start w-full bg-[#F2F2F2] rounded-[14.63px] px-[40px] py-[20px]">
                    <div className="flex flex-col gap-[20px] w-full">
                        <div className="flex justify-start font-bold text-[26.6px]">
                            <p>🔍</p>
                            <p className="text-[#006EFF]">태그 인증?</p>
                            <p>그게 뭐죠?</p>
                        </div>
                        <div>
                            <p className="text-[23.94px]">개인 인스타그램에 #경주의밤_2024 해시태그를 포함하여 공게 개시글을 작성해주세요.</p>
                            <p className="text-[23.94px]">인스타 인증게시판에서 본인 인스타임을 인증해주시면, 상품을 보내드립니다.</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="py-[15px] px-[45px] rounded-[14.63px] bg-[#FFF] text-[21.28px] font-semibold" style={{boxShadow: "0px 2.66px 6.65px 0px rgba(0, 0, 0, 0.35)"}} onClick={() => router.push('/certificationBoardList')}>인증하러 가기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}