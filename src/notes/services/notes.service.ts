import { Injectable } from '@nestjs/common';
import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
  private notes: Note[];

  constructor() {
    this.notes = [
      new Note(
        'Do shopping',
        new Date(Date.now()),
        'Task',
        'Do shopping',
        '2023-31-07',
      ),
      new Note(
        'Wash the car',
        new Date(Date.now()),
        'Task',
        'Wash the car',
        '2023-31-07',
      ),
      new Note('Learn', new Date(Date.now()), 'Task', 'Learn', '2023-31-07'),
      new Note(
        'Go to gym',
        new Date(Date.now()),
        'Task',
        'Go to gym',
        '2023-31-07',
      ),
    ];
  }

  get() {
    this.notes.pop();
    return this.notes;
  }
}
