import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base';

import Tag from './tag';
import Language from './language';
import Developer from './developer';

@Entity('project')
export default class Project extends BaseEntity {
  @Column({ name: 'repo_url', nullable: false })
  repoUrl: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @ManyToMany(type => Tag)
  @JoinTable({
    name: 'project_tag',
    joinColumn: { name: 'project_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' }
  })
  tags: Tag[];

  @ManyToMany(type => Language)
  @JoinTable({
    name: 'project_language',
    joinColumn: { name: 'project_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'language_id', referencedColumnName: 'id' }
  })
  languages: Language[];

  @ManyToOne(type => Developer)
  owner: Developer;
}
