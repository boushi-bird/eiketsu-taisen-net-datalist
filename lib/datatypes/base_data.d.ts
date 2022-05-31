interface General {
  idx: number;
  code: string;
  name: string;
  kana: string;
  color_idx: number;
  period_idx: number;
  appear_num: number;
  appear_suffix: string;
  appear_filter_idx: number;
  index_initial_idx: number;
  card_type_idx: number;
  card_number: number;
  cost_idx: number;
  rarity_idx: number;
  unit_type_idx: number;
  personal_idx: number;
  strong: number;
  intelligence: number;
  skill_0: number;
  skill_1: number;
  skill_2: number;
  strat_idx: number;
  illust_idx: number;
  cv_idx: number;
}

interface GeneralAppearVer {
  idx: number;
  code: string;
  name: string;
  child_idx_list: number[];
}

interface GeneralAppearFilterGroup {
  idx: number;
  code: string;
  name: string;
}

interface GeneralColor {
  idx: number;
  code: string;
  name: string;
  red: number;
  green: number;
  blue: number;
}

interface Period {
  idx: number;
  code: string;
  name: string;
}

interface IndexInitial {
  idx: number;
  name: string;
}

interface CardType {
  idx: number;
  code: string;
  name: string;
  short_name: string;
}

interface GeneralCost {
  idx: number;
  code: string;
  name: string;
}

interface GeneralRarity {
  idx: number;
  code: string;
  name: string;
  short_name: string;
}

interface UnitType {
  idx: number;
  code: string;
  name: string;
}

interface Skill {
  idx: number;
  code: string;
  name: string;
  short_name: string;
  caption: string;
}

interface GeneralStrategy {
  idx: number;
  code: string;
  name: string;
  kana: string;
  mp: number;
  caption: string;
  category_idx_list: number[];
  range_idx: number;
  time_idx: number;
}

interface GeneralStrategyCategory {
  idx: number;
  code: string;
  name: string;
}

interface GeneralStrategyRange {
  idx: number;
  code: string;
}

interface GeneralStrategyTime {
  idx: number;
  name: string;
}

interface Illust {
  idx: number;
  code: string;
  name: string;
  view_idx: number;
}

interface IllustView {
  idx: number;
  format: string;
}

interface CharacterVoice {
  idx: number;
  code: string;
  name: string;
}

interface Equip {
  idx: number;
  code: string;
  name: string;
  kana: string;
  rarity_idx: number;
  level_max: number;
  effect_main_idx: number;
  effect_sub_idx: number | null;
  reinforce_oban_num: number[];
}

interface EquipRarity {
  idx: number;
  code: string;
  name: string;
  short_name: string;
}

type EquipEffectMain = Omit<EquipEffectSub, "cond_caption">;

interface EquipEffectSub {
  idx: number;
  caption: string;
  cond_caption: string;
  target_idx: number;
  target_description: string;

  effect0_system_idx: number | null;
  effect0_lv1_param: number | null;
  effect0_lv2_param: number | null;
  effect0_lv2_powerup: boolean;
  effect0_lv3_param: number | null;
  effect0_lv3_powerup: boolean;
  effect0_lv4_param: number | null;
  effect0_lv4_powerup: boolean;

  effect1_system_idx: number | null;
  effect1_lv1_param: number | null;
  effect1_lv2_param: number | null;
  effect1_lv2_powerup: boolean;
  effect1_lv3_param: number | null;
  effect1_lv3_powerup: boolean;
  effect1_lv4_param: number | null;
  effect1_lv4_powerup: boolean;

  effect2_system_idx: number | null;
  effect2_lv1_param: number | null;
  effect2_lv2_param: number | null;
  effect2_lv2_powerup: boolean;
  effect2_lv3_param: number | null;
  effect2_lv3_powerup: boolean;
  effect2_lv4_param: number | null;
  effect2_lv4_powerup: boolean;

  time_lv2_extend: boolean;
  time_lv3_extend: boolean;
  time_lv4_extend: boolean;
}

interface EquipFilter {
  idx: number;
  code: string;
  name: string;
}

interface EquipTarget {
  idx: number;
  name: string;
}

interface EquipEffectSystem {
  idx: number;
  code: string;
  name: string;
  short_name: string;
  color_type_idx: number;
  filter_idx: number;
  unit: string;
  no_param: boolean;
  no_sign: boolean;
}

interface EquipEffectSystemColorType {
  idx: number;
  code: string;
  red: number;
  green: number;
  blue: number;
}

export interface BaseData {
  data: unknown;
  path: unknown;
  general: General[];
  color: GeneralColor[];
  generalAppearVer: GeneralAppearVer[],
  generalAppearFilterGroup: GeneralAppearFilterGroup[],
  period: Period[];
  indexInitial: IndexInitial[];
  cardType: CardType[];
  cost: GeneralCost[];
  generalRarity: GeneralRarity[];
  unitType: UnitType[];
  skill: Skill[];
  strat: GeneralStrategy[];
  stratCategory: GeneralStrategyCategory[];
  stratRange: GeneralStrategyRange[];
  stratTime: GeneralStrategyTime[];
  illust: Illust[];
  illustView: IllustView[];
  cv: CharacterVoice[];
  equip: Equip[];
  equipRarity: EquipRarity[];
  equipEffectMain: EquipEffectMain[];
  equipEffectSub: EquipEffectSub[];
  equipFilter: EquipFilter[];
  equipTarget: EquipTarget[];
  equipEffectSystem: EquipEffectSystem[];
  equipEffectSystemColorType: EquipEffectSystemColorType[];
  school: unknown;
  schoolDetail: unknown;
  schoolLevel: unknown;
  playerData: unknown;
  playerEquip: unknown;
}
