import { Controller, Get } from '@nestjs/common';
import { NotesService } from '../services/notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes() {
    return this.notesService.get();
  }
}
