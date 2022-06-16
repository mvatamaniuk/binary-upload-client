import { IFile } from '../IFile'

export interface IAxiosFilesGet {
  status: string
  files: Array<IFile>
}
