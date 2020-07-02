import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';

import Project from './project';
import Developer from './developer';

@Entity('language')
export default class Language extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @ManyToMany(type => Project)
  projects: Project[];

  @ManyToMany(type => Developer)
  developers: Developer[];
}
