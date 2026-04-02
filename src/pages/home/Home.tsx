import { MdInstallDesktop } from "react-icons/md";
import Button from "../../components/ui/Button";

import Slider from "@/components/common/Slider";
import { homeContents } from "@/data/contents/HomeContents";
import AppointmentForm from "@/features/appointments/components/AppointmentForm";

function Home() {
  return (
    <div className=" ">
      home
      <MdInstallDesktop />
      <Button children="home" className="bg-blue-400" variant="secondary" />
      <Slider
        slides={homeContents.slides}
        renderSlider={(slide) => (
          <div>
            <img src={slide.img} alt="" />
          </div>
        )}
      />
   <AppointmentForm/>
    </div>
  );
}

export default Home;
