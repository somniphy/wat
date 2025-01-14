import { Link } from "react-router";
import Main from "app/assets/jekkey/main.jpg";
import First from "app/assets/jekkey/first.jpg";
import Second from "app/assets/jekkey/second.jpg";
import Third from "app/assets/jekkey/third.jpg";
import { DribbbleIcon, InstagramIcon } from "lucide-react";
export default function JekkeyHome() {
  return (
    <div>
      <div className="flex">
        <div className="lg:flex-col space-y-6 lg:space-y-[52px]">
          <img
            src={Main}
            alt="Main"
            className="saturate-0 w-[833.03px] h-[472.3px] lg:w-[857px] lg:h-[556.36px] aspect-video"
            width="857"
            height="556.36"
          />
          <div className="flex justify-between px-4">
            <p className="text-white">Canon, EOS 1200D</p>
            <p className="text-white">Basel, Switzerland</p>
          </div>
          <h1 className="hidden lg:flex text-white font-bold text-9xl px-6 tracking-[4px]">
            JEKKEY®
          </h1>
        </div>
        <div className="hidden lg:flex flex-col">
          <img
            src={First}
            alt="First"
            className="saturate-0 w-[582px] h-[278px] aspect-video"
            width="582"
            height="278"
          />
          <img
            src={Second}
            alt="Second"
            className="saturate-0 w-[582px] h-[278px] aspect-video"
            width="582"
            height="278"
          />
          <img
            src={Third}
            alt="Third"
            className="saturate-0 w-[582px] h-[278px] aspect-video"
            width="582"
            height="278"
          />
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-3 py-6">
        <div className="w-[315px] px-2">
          <h1 className=" text-white font-bold text-8xl tracking-[4px] text-wrap">
            JEK KEY®
          </h1>
        </div>
        <img
          src={First}
          alt="First"
          className="saturate-0 w-auto h-[327px] lg:w-[582px] lg:h-[278px] aspect-video col-span-2"
          width="582"
          height="278"
        />
        <img
          src={Second}
          alt="Second"
          className="saturate-0 w-[315px] h-[454px]  lg:w-[582px] lg:h-[278px] aspect-video"
          width="582"
          height="278"
        />
        <img
          src={Third}
          alt="Third"
          className="saturate-0 w-auto h-[454px] lg:w-[582px] lg:h-[278px] aspect-video col-span-2"
          width="582"
          height="278"
        />
      </div>
      <section>
        <div className="flex justify-between items-baseline p-6">
          <h1 className="text-white font-bold text-9xl tracking-[4px]">
            GALLERY
          </h1>
          <p className="text-white">2024 Collection (A)</p>
        </div>
        <div className="grid grid-cols-3">
          <img
            src="app\assets\jekkey\lance-anderson-QdAAasrZhdk-unsplash.jpg"
            alt=""
            className="w-auto h-[353px] lg:w-[480px] lg:h-[500px] saturate-0 aspect-video"
          />
          <img
            src="app\assets\jekkey\phil-desforges-ow1mML1sOi0-unsplash.jpg"
            alt=""
            className="w-auto h-[353px] lg:w-[480px] lg:h-[500px] saturate-0 aspect-video"
          />
          <img
            src="app\assets\jekkey\denys-nevozhai-DEEJP2_U_x4-unsplash.jpg"
            alt=""
            className="w-auto h-[353px] lg:w-[480px] lg:h-[500px] saturate-0 aspect-video"
          />
          <img
            src="app\assets\jekkey\patrick-tomasso-5eZu5p0vSPg-unsplash.jpg"
            alt=""
            className="w-auto h-[353px] lg:w-[960px] lg:h-[500px] saturate-0 aspect-video col-span-2"
          />
          <img
            src="app\assets\jekkey\simone-hutsch-ItvVUpgac0o-unsplash.jpg"
            alt=""
            className="w-auto h-[706px] lg:w-[480px] lg:h-[1000px]  saturate-0 aspect-video row-span-2"
          />
          <img
            src="app\assets\jekkey\sean-pollock-PhYq704ffdA-unsplash.jpg"
            alt=""
            className="w-auto h-[353px] lg:w-[960px] lg:h-[500px]  saturate-0 aspect-video col-span-2"
          />
        </div>
      </section>
      <section>
        <div className="flex justify-center p-12">
          <div className="bg-[#090909] flex gap-6 p-6 max-w-[777px]">
            <img
              src="app\assets\jekkey\jekkey-bio.png"
              alt=""
              className="w-[263px] h-[302px]"
            />
            <div className="flex flex-col space-y-6">
              <Link to="/jekkey" className="text-white text-md font-bold">
                JEKKEY®
              </Link>
              <p className="text-white">
                Known for a meticulous eye for detail and masterful composition,
                Jess Key collaborates with architects, designers, and developers
                to bring architectural visions to life through photography.
              </p>
              <p className="text-white">
                Jess Key is a professional photographer specializing in
                architecture and modern buildings. With a focus on capturing the
                essence of design, structure, and spatial aesthetics, Jess Key
                creates striking images that highlight the interplay of light,
                geometry, and texture.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between py-9 px-6 bg-[#090909] items-baseline">
          <div className="flex-col space-y-4 items-baseline">
            <Link to="jekkey" className="text-white flex gap-4">
              <InstagramIcon />
              <span>Instagram</span>
            </Link>
            <Link to="jekkey" className="text-white flex gap-4">
              <DribbbleIcon />
              <span>Driiible</span>
            </Link>
          </div>
          <div className="flex-col space-y-4">
            <p className="text-white">jekkey@studio.ph</p>
            <p className="text-white">+123 4567 8900</p>
          </div>
        </div>
      </section>
    </div>
  );
}
