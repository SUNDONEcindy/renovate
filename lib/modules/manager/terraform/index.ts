import type { Category } from '../../../constants';
import { BitbucketTagsDatasource } from '../../datasource/bitbucket-tags';
import { DockerDatasource } from '../../datasource/docker';
import { GitTagsDatasource } from '../../datasource/git-tags';
import { GithubReleasesDatasource } from '../../datasource/github-releases';
import { GithubTagsDatasource } from '../../datasource/github-tags';
import { HelmDatasource } from '../../datasource/helm';
import { TerraformModuleDatasource } from '../../datasource/terraform-module';
import { TerraformProviderDatasource } from '../../datasource/terraform-provider';

export { updateArtifacts } from './lockfile';
export { updateLockedDependency } from './lockfile/update-locked';
export { extractPackageFile } from './extract';

export const supportsLockFileMaintenance = true;

export const url = 'https://developer.hashicorp.com/terraform/docs';
export const categories: Category[] = ['iac', 'terraform'];

export const defaultConfig = {
  commitMessageTopic: 'Terraform {{depName}}',
  managerFilePatterns: ['/\\.tf$/'],
  pinDigests: false,
};

export const supportedDatasources = [
  BitbucketTagsDatasource.id,
  DockerDatasource.id,
  GitTagsDatasource.id,
  GithubTagsDatasource.id,
  GithubReleasesDatasource.id,
  HelmDatasource.id,
  TerraformModuleDatasource.id,
  TerraformProviderDatasource.id,
];
