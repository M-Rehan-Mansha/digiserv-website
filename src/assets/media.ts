import aboutCreativeTeamImg from './images/about_creative_team_1794678619682.jpg';
import heroAgencyStudioImg from './images/hero_agency_studio_1794678619347.jpg';
import workCreativeMediaImg from './images/work_creative_media_1794678620846.jpg';
import workEcommerceStoreImg from './images/work_ecommerce_store_1794678620499.jpg';
import workWebPlatformImg from './images/work_web_platform_1794678620412.jpg';

export const AGENCY_MEDIA = {
  aboutCreativeTeam: aboutCreativeTeamImg,
  heroAgencyStudio: heroAgencyStudioImg,
  workCreativeMedia: workCreativeMediaImg,
  workEcommerceStore: workEcommerceStoreImg,
  workWebPlatform: workWebPlatformImg,
} as const;

const LEGACY_PATH_MAP: Record<string, string> = {
  '/src/assets/images/about_creative_team_1794678619682.jpg': aboutCreativeTeamImg,
  '/src/assets/images/hero_agency_studio_1794678619347.jpg': heroAgencyStudioImg,
  '/src/assets/images/work_creative_media_1794678620846.jpg': workCreativeMediaImg,
  '/src/assets/images/work_ecommerce_store_1794678620499.jpg': workEcommerceStoreImg,
  '/src/assets/images/work_web_platform_1794678620412.jpg': workWebPlatformImg,
};

export function resolveMediaUrl(url: string): string {
  return LEGACY_PATH_MAP[url] ?? url;
}
