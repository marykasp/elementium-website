import { quotes } from "../assets";

const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[4px] max-w-[380px] md:mr-10 sm:mr-5 mr-0 my-5 bg-slate-900 hover:bg-gradient-to-b hover:from-slate-800">
      <img
        src={quotes}
        alt="quotation marks"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[16px] leading-[22px] text-white my-5">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[18px] text-white leading-[30px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
