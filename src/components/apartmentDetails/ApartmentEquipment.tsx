import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { LuBath, LuSofa, LuUtensils } from 'react-icons/lu';
import { IconType } from 'react-icons';
import { useI18n } from '../../i18n';
import type { ApartmentText } from '../../i18n/types';

type GroupKey = keyof ApartmentText['equipment'];

const groupIcons: Record<GroupKey, IconType> = {
  living: LuSofa,
  kitchen: LuUtensils,
  bathroom: LuBath,
  misc: FiCheckCircle,
};

const groupOrder: GroupKey[] = ['living', 'kitchen', 'bathroom', 'misc'];

const ApartmentEquipment = ({ groups }: { groups: ApartmentText['equipment'] }) => {
  const { messages } = useI18n();
  return (
    <div className='apartment-overview__equipment-groups'>
      {groupOrder.filter(key => groups[key]?.length).map(key => {
        const Icon = groupIcons[key];
        const title = messages.equipment[key];
        const orderedItems = [...groups[key]].sort((a, b) => b.length - a.length);
        return (
          <section className='apartment-overview__equipment-group' key={key} aria-label={title}>
            <h4><Icon aria-hidden='true' />{title}</h4>
            <ul>
              {orderedItems.map(item => <li key={item}><FiCheck aria-hidden='true' /><span>{item}</span></li>)}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default ApartmentEquipment;
