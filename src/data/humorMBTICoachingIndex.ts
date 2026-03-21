// Unified index for all 256 Humor Type + MBTI coaching combinations
import { humorMBTICoachingData as coaching1, HumorMBTICoaching } from './humorMBTICoaching';
import { humorMBTICoachingData as coaching2 } from './humorMBTICoaching2';
import { humorMBTICoaching3 as coaching3 } from './humorMBTICoaching3';
import { humorMBTICoaching4 as coaching4 } from './humorMBTICoaching4';

export type { HumorMBTICoaching };

// Combine all coaching data
export const allHumorMBTICoaching: HumorMBTICoaching[] = [
  ...coaching1,
  ...coaching2,
  ...coaching3,
  ...coaching4,
];

// Get coaching for a specific humor code + MBTI type combination
export function getHumorMBTICoaching(humorCode: string, mbtiType: string): HumorMBTICoaching | undefined {
  return allHumorMBTICoaching.find(
    c => c.humorCode === humorCode && c.mbtiType === mbtiType
  );
}

// Get all coaching entries for a specific humor code
export function getCoachingByHumorCode(humorCode: string): HumorMBTICoaching[] {
  return allHumorMBTICoaching.filter(c => c.humorCode === humorCode);
}

// Get all coaching entries for a specific MBTI type
export function getCoachingByMBTIType(mbtiType: string): HumorMBTICoaching[] {
  return allHumorMBTICoaching.filter(c => c.mbtiType === mbtiType);
}

// Get total count
export function getTotalCoachingCount(): number {
  return allHumorMBTICoaching.length;
}
