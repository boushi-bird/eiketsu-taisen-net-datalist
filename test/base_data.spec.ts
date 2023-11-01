import https from "https";
import { BaseData } from "../writable";

function get(url: string): Promise<string> {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let result = "";
      res.on("data", (chunk) => {
        result += chunk;
      });
      res.on("end", () => {
        resolve(result);
      });
    });
  });
}

const DATA_URL =
  "https://boushi-bird.github.io/eiketsu-taisen-data/base_data.json";

let baseData: BaseData | undefined;

beforeAll(async () => {
  const res = await get(DATA_URL);
  baseData = JSON.parse(res) as BaseData;
});

describe("BaseData", () => {
  type DataType = BaseData;
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData;
  });
  type DataKey = keyof BaseData;
  const KEYS: DataKey[] = [
    "data",
    "path",
    "general",
    "generalAppearVer",
    "generalAppearFilterGroup",
    "color",
    "period",
    "indexInitial",
    "cardType",
    "cost",
    "generalRarity",
    "unitType",
    "skill",
    "strat",
    "stratCategory",
    "stratRange",
    "stratTime",
    "illust",
    "illustView",
    "cv",
    "equip",
    "equipRarity",
    "equipEffectMain",
    "equipEffectSub",
    "equipFilter",
    "equipEffectSystem",
    "equipEffectSystemColorType",
    "equipCategory",
    "school",
    "schoolDetail",
    "schoolLevel",
    "appearPattern",
    "wayToGet",
    "playerData",
    "playerequip",
    "soul",
    "soulRarity",
    "soulEffect",
    "soulEffectColorType",
    "playersoul",
  ];

  const IGNORE_KEYS: string[] = [];

  test("no data", async () => {
    const keys = KEYS.filter((key) => !data[key]);
    expect(keys).toEqual([]);
  });

  test("added keys", async () => {
    const keys = Object.keys(data).filter(
      (key) => !IGNORE_KEYS.includes(key) && !(KEYS as string[]).includes(key),
    );
    expect(keys).toEqual([]);
  });

  test("deleted keys", async () => {
    const keys = KEYS.filter(
      (key) => !IGNORE_KEYS.includes(key) && !Object.keys(data).includes(key),
    );
    expect(keys).toEqual([]);
  });
});

describe('BaseData["general"]', () => {
  type DataType = BaseData["general"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.general;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "code",
      "ds_code",
      "face_code",
      "name",
      "kana",
      "color_idx",
      "period_idx",
      "appear_num",
      "appear_suffix",
      "appear_filter_idx",
      "index_initial_idx",
      "card_type_idx",
      "card_number",
      "cost_idx",
      "rarity_idx",
      "unit_type_idx",
      "personal_idx",
      "strong",
      "intelligence",
      "skill_0",
      "skill_1",
      "skill_2",
      "strat_idx",
      "illust_idx",
      "cv_idx",
      "appear_pattern_idx",
    ],
    ignoreProps: [],
  });
});

describe('BaseData["generalAppearVer"]', () => {
  type DataType = BaseData["generalAppearVer"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.generalAppearVer;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "child_idx_list"],
    ignoreProps: [],
  });
});

describe('BaseData["generalAppearFilterGroup"]', () => {
  type DataType = BaseData["generalAppearFilterGroup"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.generalAppearFilterGroup;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["color"]', () => {
  type DataType = BaseData["color"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.color;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "red", "green", "blue"],
    ignoreProps: [],
  });
});

describe('BaseData["period"]', () => {
  type DataType = BaseData["period"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.period;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["indexInitial"]', () => {
  type DataType = BaseData["indexInitial"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.indexInitial;
  });

  testHasProperties(() => data, {
    props: ["idx", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["cardType"]', () => {
  type DataType = BaseData["cardType"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.cardType;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "short_name"],
    ignoreProps: [],
  });
});

describe('BaseData["cost"]', () => {
  type DataType = BaseData["cost"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.cost;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "value"],
    ignoreProps: [],
  });
});

describe('BaseData["unitType"]', () => {
  type DataType = BaseData["unitType"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.unitType;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["skill"]', () => {
  type DataType = BaseData["skill"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.skill;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "short_name", "caption", "by_cost"],
    ignoreProps: [],
  });
});

describe('BaseData["strat"]', () => {
  type DataType = BaseData["strat"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.strat;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "code",
      "name",
      "kana",
      "mp",
      "caption",
      "category_idx_list",
      "range_idx",
      "time_idx",
    ],
    ignoreProps: [],
  });

  test("category_idx_list is array", async () => {
    for (const d of data) {
      expect(Array.isArray(d.category_idx_list)).toBeTruthy();
    }
  });
});

describe('BaseData["stratCategory"]', () => {
  type DataType = BaseData["stratCategory"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.stratCategory;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["stratRange"]', () => {
  type DataType = BaseData["stratRange"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.stratRange;
  });

  testHasProperties(() => data, { props: ["idx", "code"], ignoreProps: [] });
});

describe('BaseData["stratTime"]', () => {
  type DataType = BaseData["stratTime"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.stratTime;
  });

  testHasProperties(() => data, { props: ["idx", "name"], ignoreProps: [] });
});

describe('BaseData["illust"]', () => {
  type DataType = BaseData["illust"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.illust;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "view_idx"],
    ignoreProps: [],
  });
});

describe('BaseData["illustView"]', () => {
  type DataType = BaseData["illustView"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.illustView;
  });

  testHasProperties(() => data, { props: ["idx", "format"], ignoreProps: [] });
});

describe('BaseData["cv"]', () => {
  type DataType = BaseData["cv"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.cv;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["equip"]', () => {
  type DataType = BaseData["equip"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equip;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "code",
      "name",
      "kana",
      "rarity_idx",
      "level_max",
      "effect_main_idx",
      "effect_sub_idx",
      "reinforce_oban_num",
      "appear_pattern_idx",
      "category",
    ],
    ignoreProps: [],
  });
});

describe('BaseData["equipRarity"]', () => {
  type DataType = BaseData["equipRarity"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipRarity;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name", "short_name", "buy", "sell"],
    ignoreProps: [],
  });
});

describe('BaseData["equipEffectMain"]', () => {
  type DataType = BaseData["equipEffectMain"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipEffectMain;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "caption",
      "target_idx",
      "target_description",
      "effect0_system_idx",
      "effect0_lv1_param",
      "effect0_lv2_param",
      "effect0_lv2_powerup",
      "effect0_lv3_param",
      "effect0_lv3_powerup",
      "effect0_lv4_param",
      "effect0_lv4_powerup",
      "effect1_system_idx",
      "effect1_lv1_param",
      "effect1_lv2_param",
      "effect1_lv2_powerup",
      "effect1_lv3_param",
      "effect1_lv3_powerup",
      "effect1_lv4_param",
      "effect1_lv4_powerup",
      "effect2_system_idx",
      "effect2_lv1_param",
      "effect2_lv2_param",
      "effect2_lv2_powerup",
      "effect2_lv3_param",
      "effect2_lv3_powerup",
      "effect2_lv4_param",
      "effect2_lv4_powerup",
      "time_lv2_extend",
      "time_lv3_extend",
      "time_lv4_extend",
    ],
    ignoreProps: [],
  });
});

describe('BaseData["equipEffectSub"]', () => {
  type DataType = BaseData["equipEffectSub"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipEffectSub;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "caption",
      "cond_caption",
      "target_idx",
      "target_description",
      "effect0_system_idx",
      "effect0_lv1_param",
      "effect0_lv2_param",
      "effect0_lv2_powerup",
      "effect0_lv3_param",
      "effect0_lv3_powerup",
      "effect0_lv4_param",
      "effect0_lv4_powerup",
      "effect1_system_idx",
      "effect1_lv1_param",
      "effect1_lv2_param",
      "effect1_lv2_powerup",
      "effect1_lv3_param",
      "effect1_lv3_powerup",
      "effect1_lv4_param",
      "effect1_lv4_powerup",
      "effect2_system_idx",
      "effect2_lv1_param",
      "effect2_lv2_param",
      "effect2_lv2_powerup",
      "effect2_lv3_param",
      "effect2_lv3_powerup",
      "effect2_lv4_param",
      "effect2_lv4_powerup",
      "time_lv2_extend",
      "time_lv3_extend",
      "time_lv4_extend",
    ],
    ignoreProps: [],
  });
});

describe('BaseData["equipFilter"]', () => {
  type DataType = BaseData["equipFilter"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipFilter;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "name"],
    ignoreProps: [],
  });
});

describe('BaseData["equipEffectSystem"]', () => {
  type DataType = BaseData["equipEffectSystem"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipEffectSystem;
  });

  testHasProperties(() => data, {
    props: [
      "idx",
      "code",
      "short_name",
      "color_type_idx",
      "filter_idx",
      "unit",
      "no_param",
      "no_sign",
    ],
    ignoreProps: [],
  });
});

describe('BaseData["equipEffectSystemColorType"]', () => {
  type DataType = BaseData["equipEffectSystemColorType"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.equipEffectSystemColorType;
  });

  testHasProperties(() => data, {
    props: ["idx", "code", "red", "green", "blue"],
    ignoreProps: [],
  });
});

describe('BaseData["appearPattern"]', () => {
  type DataType = BaseData["appearPattern"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.appearPattern;
  });

  testHasProperties(() => data, {
    props: ["idx", "start", "end", "way_to_get_idx", "url"],
    ignoreProps: [],
  });
});

describe('BaseData["wayToGet"]', () => {
  type DataType = BaseData["wayToGet"][number];
  let data: DataType[] = [];
  beforeEach(() => {
    data = baseData.wayToGet;
  });

  testHasProperties(() => data, {
    props: ["idx", "name", "help"],
    ignoreProps: [],
  });
});

// MEMO: PlayerDataは取れない場合があるのでテストには書かない

function testHasProperties<DataType>(
  data: () => DataType[],
  { props, ignoreProps }: { props: (keyof DataType)[]; ignoreProps: string[] },
) {
  test("no data", async () => {
    for (const d of data()) {
      const keys = (props as string[]).filter(
        (key) => !ignoreProps.includes(key) && d[key] === undefined,
      );
      expect(keys).toEqual([]);
    }
  });

  test("added keys", async () => {
    for (const d of data()) {
      const keys = Object.keys(d).filter(
        (key) =>
          !ignoreProps.includes(key) && !(props as string[]).includes(key),
      );
      expect(keys).toEqual([]);
    }
  });

  test("deleted keys", async () => {
    for (const d of data()) {
      const keys = (props as string[]).filter(
        (key) => !ignoreProps.includes(key) && !Object.keys(d).includes(key),
      );
      expect(keys).toEqual([]);
    }
  });
}
