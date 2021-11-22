import { EntityRepository, Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from 'src/event/entities/event.entity';
import { UpdateEventDto } from './dto/update-event.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    return this.save(createEventDto);
  }

  async updateEvent(updateEventDto: UpdateEventDto): Promise<Event> {
    return this.save(updateEventDto);
  }
}
