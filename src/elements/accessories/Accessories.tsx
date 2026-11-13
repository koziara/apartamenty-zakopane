import { IconType } from 'react-icons';
import { LuBath, LuCamera, LuCoffee, LuCupSoda, LuMountain, LuParkingSquare, LuRefrigerator, LuTv, LuUtensils, LuWifi, LuWind } from 'react-icons/lu';
import { useI18n } from '../../i18n';
import './accessories.css';

type AccessoryProps = {
  accessoryId: number;
  imagePath: string;
};

const accessoryDesign: Record<string, { Icon: IconType }> = {
  '/icons/led-television-icon.svg': { Icon: LuTv },
  '/icons/wifi-line-icon.svg': { Icon: LuWifi },
  '/icons/towel-icon.svg': { Icon: LuBath },
  '/icons/hairdryer-icon.svg': { Icon: LuWind },
  '/icons/electric-kettle-icon.svg': { Icon: LuCupSoda },
  '/icons/tea-hot-icon.svg': { Icon: LuCoffee },
  '/icons/kitchen-cooking-pot-non-stick-icon.svg': { Icon: LuUtensils },
  '/icons/fridge-icon.svg': { Icon: LuRefrigerator },
  '/icons/parking-signs-icon.svg': { Icon: LuParkingSquare },
  '/icons/mountain-icon.svg': { Icon: LuMountain },
  '/icons/cctv-icon.svg': { Icon: LuCamera },
};

const Accessories = ({ accessoryId, imagePath }: AccessoryProps) => {
  const { messages } = useI18n();
  const design = accessoryDesign[imagePath];
  const Icon = design?.Icon;

  return (
    <li className='accessory'>
      {Icon ? <Icon aria-hidden='true' /> : <img src={imagePath} alt='' aria-hidden='true' />}
      <span>{messages.accessories[accessoryId as keyof typeof messages.accessories]}</span>
    </li>
  );
};

export default Accessories;
