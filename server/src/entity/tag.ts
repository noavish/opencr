import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';

import Project from './project';

@Entity('tag')
export default class Tag extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @ManyToMany(type => Project)
  projects: Project[];
}
