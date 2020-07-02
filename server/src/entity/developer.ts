import { Entity, Column, JoinColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base';

import Project from './project';
import Language from './language';

import { User } from './user';

@Entity('developer')
export default class Developer extends BaseEntity {
  @Column({ type: 'boolean', name: 'open_for_mentorship' })
  openForMentorship: boolean;

  @Column({ type: 'integer', name: 'years_of_experience' })
  yearsOfExperience: number;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @OneToMany(type => Project, 'owner')
  projects: Project[];

  @ManyToMany(type => Language)
  @JoinTable({
    name: 'developer_language',
    joinColumn: { name: 'developer_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'language_id', referencedColumnName: 'id' }
  })
  languages: Language[];
}
