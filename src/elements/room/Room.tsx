import type { CSSProperties } from 'react';
import { LuBedDouble, LuBedSingle, LuSofa } from 'react-icons/lu';
import { useI18n } from '../../i18n';
import './room.css';

export type BedType = 'double' | 'largeDouble' | 'single' | 'sofa' | 'couch';
export type RoomName = 'livingRoom' | 'bedroom' | 'studio';
export type Arrangement = { room: RoomName; capacity: number; beds: { type: BedType; count: number }[] };

type RoomProps = {
  capacity: number;
  arrangements: Arrangement[];
};

const isDouble = (type: BedType) => type === 'double' || type === 'largeDouble';
const isSofa = (type: BedType) => type === 'sofa' || type === 'couch';

const Room = ({ capacity, arrangements }: RoomProps) => {
  const { tp, messages } = useI18n();

  const options = arrangements.flatMap(room => room.beds.flatMap((bed, bedIndex) => {
    const label = messages.rooms.beds[bed.type];
    const guests = isDouble(bed.type) ? 2 : bed.type === 'single' ? 1 : bed.count === 1 && isSofa(bed.type) ? room.capacity : undefined;
    const Icon = isSofa(bed.type) ? LuSofa : bed.type === 'single' ? LuBedSingle : LuBedDouble;

    return Array.from({ length: bed.count }, (_, index) => ({
      id: `${room.room}-${bedIndex}-${index}`,
      room: messages.rooms.names[room.room],
      label: bed.count > 1 ? `${label} ${index + 1}` : label,
      Icon,
      guests,
      order: isDouble(bed.type) ? 0 : bed.type === 'single' ? 1 : 3,
    }));
  })).sort((a, b) => a.order - b.order);

  // Keep guest labels only where the capacity of each individual bed is known.
  const showCapacity = options.every(option => option.guests !== undefined)
    && options.reduce((total, option) => total + (option.guests || 0), 0) === capacity;

  return (
    <div className='room-container' style={{ '--sleeping-option-count': options.length } as CSSProperties}>
      {options.map(({ id, room, label, Icon, guests }) => (
        <article className='room-card' key={id}>
          <Icon className='room-card__icon' aria-hidden='true' />
          {showCapacity && <span className='room-card__capacity'>{tp('rooms.guests', guests ?? 0)}</span>}
          <h4>{label}</h4>
          <p>{room}</p>
        </article>
      ))}
    </div>
  );
};

export default Room;
