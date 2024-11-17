export default function footingPostPage() {
    return(
        <div className="flex flex-col items-center min-h-screen bg-[#FFA500]">
            <div className="flex flex-col items-center">
                <h1 className="text-[32px] weight-700 text-white pt-[66.5px]">경주 맞춤형 관광지 코스 제공 서비스</h1>
                <div className="flex gap-[21.95px] pt-[38.43px] pb-[34.52px] weight-700 text-white">
                    <button className="rounded-[14.63px] weight-700 bg-[#F18304] px-[27.93px] py-[9.52px]">SNS 인증게시판</button>
                    <button className="rounded-[14.63px] weight-700 bg-[#F18304] px-[51.87px] py-[9.52px]">할인쿠폰</button>
                    <button className="rounded-[14.63px] weight-700 bg-[#F18304] px-[33.25px] py-[9.52px]">코스 모두 보기</button>
                    <button className="rounded-[14.63px] weight-700 bg-[#F18304] px-[69.83px] py-[9.52px]">후기</button>
                </div>
            </div>
            <div className="rounded-t-[21.28px] flex flex-col items-center w-screen min-h-screen pt-[40.63px] bg-white">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col">
                        <label className="text-[23.94px] weight-700 pb-1">인스타 닉네임</label>
                        <input type="text" className="rounded-[14.63px] w-[343.805px] h-[48.545px] bg-[#F1F1F1] px-[19.28px]" placeholder="인스타 user name을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[23.94px] weight-700 pb-1">전화번호</label>
                        <input type="text" className="rounded-[14.63px] w-[343.805px] h-[48.545px] bg-[#F1F1F1] px-[19.28px]" placeholder="전화번호를 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[23.94px] weight-700 pb-1">이메일</label>
                        <input type="text" className="rounded-[14.63px] w-[343.805px] h-[48.545px] bg-[#F1F1F1] px-[19.28px]" placeholder="이메일을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[23.94px] weight-700 pb-1">제목</label>
                        <input type="text" className="rounded-[14.63px] w-[537.985px] h-[48.545px] bg-[#F1F1F1] px-[19.28px]" placeholder="제목을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[23.94px] weight-700 pb-1">인스타그램 계정 인증</label>
                        <textarea type="text" className="rounded-[14.63px] w-[859.18px] h-[347.795px] bg-[#F1F1F1] px-[19.28px] py-[10px]" placeholder="제목을 입력해주세요"></textarea>
                    </div>
                    <button className="self-center mt-10 mb-[307.83px] rounded-[14.63px] w-[292.6px] h-[66.5px] bg-[#FFA500] text-[23.94px] text-white weight-700">SNS 인증 등록</button>
                </div>
            </div>
        </div>
    )
}