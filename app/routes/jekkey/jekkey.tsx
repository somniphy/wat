import { Link } from "react-router";
import Main from "app/assets/jekkey/main.jpg";
import First from "app/assets/jekkey/first.jpg";
import Second from "app/assets/jekkey/second.jpg";
import Third from "app/assets/jekkey/third.jpg";
export default function JekkeyHome() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] w-[1440px]">
      <div className="grid grid-cols-3">
        <img
          src={Main}
          alt="Main"
          className="saturate-0 w-[857px] h-[556.36px] col-span-2"
          width="857"
          height="556.36"
        />
        <div className="w-max">
          <img
            src={First}
            alt="First"
            className="saturate-0 w-[582px] h-[278px]"
            width="582"
            height="278"
          />
          <img
            src={Second}
            alt="Second"
            className="saturate-0 w-[582px] h-[278px]"
            width="582"
            height="278"
          />
          <img
            src={Third}
            alt="Third"
            className="saturate-0 w-[582px] h-[278px]"
            width="582"
            height="278"
          />
        </div>
      </div>
    </main>
  );
}
