let courses = [
  { no: 1,
    name: "김광석거리",
    code: "kimload",
    latitude: 35.860277917787684,
    longitude: 128.60695323461732,
    visited: "Y",
    bg: "thumb thumb1",
    address: "대구시 중구 대봉동 6-11",
    mode: '도보코스',
    category: 'photo',
    character: ['근대골목', '벽화거리', '재래시장', '아기자기', '사기찍기'],
  },
  {
    no: 2,
    name: "대구수목원",
    code: "arboretum",
    latitude: 35.79970889124139,
    longitude: 128.522017152701,
    visited: "N",
    bg: "thumb thumb2",
    address: "대구시 달서구 화암로 342",
    mode: '도보코스',
    category: 'photo',
    character: ['근대골목', '벽화거리', '재래시장', '아기자기', '사기찍기'],
  },
  {
    no: 3,
    name: "본리세거지",
    code: "moon",
    latitude: 35.792549982520576,
    longitude: 128.5180314374457,
    visited: "N",
    bg: "thumb thumb3",
    address: "대구시 달성군 화원읍 인흥3길 16",
    mode: '드라이브코스',
    category: 'photo',
    character: ['민속촌', '전통골목', '관광명소', '자연풍경', '사기찍기'],

  },
  {
    no: 4,
    name: "송해공원",
    code: "songpark",
    latitude: 35.78076740002001,
    longitude: 128.4800733663803,
    visited: "Y",
    bg: "thumb thumb4",
    address: "대구시 달성군 옥포읍 기세리 306",
    mode: '자전거코스',
    category: 'photo',
    character: ['근대골목', '벽화거리', '재래시장', '아기자기', '사기찍기'],

  },
  {
    no: 5,
    name: "디아크",
    code: "arc",
    latitude: 35.838848867202266,
    longitude: 128.468070164681,
    visited: "N",
    bg: "thumb thumb5",
    address: "대구시 달성군 다사읍 강정본길 57",
    mode: '자전거코스',
    category: 'photo',
    character: ['근대골목', '벽화거리', '재래시장', '아기자기', '사기찍기'],

  },
  {
    no: 6,
    name: "수성못",
    code: "susung",
    latitude: 35.82730155615731,
    longitude: 128.61728710333927,
    visited: "N",
    bg: "thumb thumb6",
    address: "대구시 수성구 두산동 512",
    mode: '드라이브코스',
    category: 'photo',
    character: ['유원지', '산책코스', '관광명소', '사진찍기'],

  },
];

let tour = [
  {
    no : 1,
    name : "83타워",
    latitude: 35.853815529357476,
    longitude: 128.5651361758742,
    address: "대구 달서구 두류동 산 302-11",
    category : "tour",
    character : ["관광명소", "놀이공원", "가족여행", "익사이팅"]
  },
  {
    no : 2,
    name : "비슬산군립공원",
    latitude: 35.71667893292271,
    longitude: 128.52485643132405,
    address: "대구 달성군 가창면 정대리 산 185-1",
    category : "tour",
    character : ["관광명소", "자연휴양", "가족여행", "풍경", "참꽃축제"]
  },
  {
    no : 3,
    name : "앞산전망대",
    latitude: 35.830177065298315,
    longitude: 128.57667608402528,
    address: "대구 남구 대명동 산 197-7",
    category : "tour",
    character : ["자연휴양", "풍경", "가족여행", "케이블카"]
  },
  {
    no : 4,
    name : "약령시",
    latitude: 35.8736071771583,
    longitude: 128.60886992589627,
    address: "대구 중구 동인동3가 412",
    category : "tour",
    character : ["관광명소", "역사적 장소", "한약", "약제"]
  },
  {
    no : 5,
    name : "서문시장",
    latitude: 35.868901541639694,
    longitude: 128.5807644217379,
    address: "대구 중구 대신동 115-378",
    category : "tour",
    character : ["관광명소", "전통시장", "다양한 상품", "흥미유발"]
  },
  {
    no : 6,
    name : "에코테마파크 대구 숲",
    latitude: 35.792754646283214,
    longitude: 128.62667392763623,
    address: "대구 달성군 가창면 용계리 534-1",
    category : "tour",
    character : ["관광명소", "자연휴양", "가족여행", "여유로움", "익사이팅"]
  }
];
let food = [
    {
      no : 1,
      name : "일송정",
      latitude: 35.85586358336289,
      longitude: 128.58597382331945,
      address: "대구 남구 대명동 1876-1",
      category : "food",
      character : ["생선요리", "분위기 좋음", "가족식사", "매콤함", "맛집"]
    },
    {
      no : 2,
      name : "대동강",
      latitude: 35.84387093054252,
      longitude: 128.60390831149093,
      address: "대구 남구 봉덕동 948-13",
      category : "food",
      character : ["계절별미", "냉면", "시원함", "맛집"]
    },
    {
      no : 3,
      name : "추가네대구뽈찜",
      latitude: 35.88360029595737,
      longitude: 128.58109196620077,
      address: "대구 서구 원대동2가 81-2",
      category : "food",
      character : ["이열치열", "밥 도둑", "소주 한잔", "매콤함", "생선요리"]
    },
    {
      no : 4,
      name : "금곡삼계탕",
      latitude: 35.83929577368689,
      longitude: 128.70476108232506,
      address: "대구 수성구 신매동 567-55",
      category : "food",
      character : ["뜨끈함", "닭요리", "시원한 국물", "보양식", "계절별미"]
    },
    {
      no : 5,
      name : "미림",
      latitude: 35.87087981236527,
      longitude: 128.581087156315,
      address: "대구 중구 대신동 138",
      category : "food",
      character : ["전통가득", "맛집", "유명함", "돈까스", "백종원"]
    },
    {
      no : 6,
      name : "마당",
      latitude: 35.86535592668934,
      longitude: 128.60404894384433,
      address: "대구 중구 삼덕동2가 223-3",
      category : "food",
      character : ["육류 고기", "대구 맛집", "갈매기 살", "회식", "옛날 감성"]
    }
];

let festival = [
  {
    no : 1,
    name : "이월드별빛축제",
    latitude: 35.854836378898995,
    longitude: 128.5648020245627,
    address: "대구광역시 달서구 두류공원로 200",
    category : "festival",
    character : ["로맨틱", "꽃과 별빛", "겨울한정", "1월중", "엔젤로드"]
  },
  {
    no : 2,
    name : "비슬산참꽃문화제",
    latitude: 35.6933405684731,
    longitude: 128.50579542153363,
    address: "대구광역시 달성군 유가면 휴양림길 230",
    category : "festival",
    character : ["참꽃 가요제", "반딧불이 버스킹", "댄스퍼레이드", "4월중", "수채화"]
  },
  {
    no : 3,
    name : "팔공산 벚꽃축제",
    latitude: 35.98948095037052,
    longitude: 128.69708560085104,
    address: "대구 동구 팔공산 동화지구 분수대 광장",
    category : "festival",
    character : ["벚꽃터널", "대표축제", "암벽등반 체험", "동화사", "4월중"]
  },
  {
    no : 4,
    name : "대구국제뮤지컬페스티벌",
    latitude: 35.88387312231099,
    longitude: 128.59480623873574,
    address: "대구시 북구 호암로 51 대구 삼성창조 캠퍼스",
    category : "festival",
    character : ["K-Musical", "여름", "세계 뮤지컬 소개", "6~7월중", "볼거리"]
  },
  {
    no : 5,
    name : "대구치맥페스티벌",
    latitude: 35.851926365225445,
    longitude: 128.56100794568482,
    address: "대구 달서구 공원순환로 7",
    category : "festival",
    character: ["치킨과 맥주", "시식", "무대행사", "전시행사", "7월중"]
  },
  {
    no : 6,
    name : "파워풀대구페스티벌마당",
    latitude: 35.8696271936964,
    longitude: 128.59702722034044,
    address: "대구광역시 중구 국채보상로",
    category : "festival",
    character: ["열정", "빨강", "컬러풀퍼레이드", "거리예술제", "7월중"]
  }
];

export class MemoryMainRepository {
  
  async findAllCourse() {
    return courses;
  }
  async findOne(code) {
    return courses.find((e) => e.code === code);
  }
  async updateStatus(code) {
    courses = courses.map((course) => course.code === code ? { ...course, visited: "Y" } : course );
  }

  async findAllTour() {
    return tour;
  }
  async findAllFood() {
    return food;
  }
  async findAllFestival() {
    return festival;
  }
}

