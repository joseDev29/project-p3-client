import { ProjectModel } from './project.model';

export interface BlockModel {
  id?: string;
  code?: string;
  name: string;
  description: string;
  projectId: string;
  project?: ProjectModel;
}
