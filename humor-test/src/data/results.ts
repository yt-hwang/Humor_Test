import { questions } from "./questions";

export interface GagResult {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
}

export interface AxisScores {
  OI: number; // Organized vs Improvised
  NB: number; // Natural vs Abstract  
  VP: number; // Verbal vs Physical
  BD: number; // Bright vs Dark
}

// 16가지 개그유형 결과 데이터
export const gagResults: Record<string, GagResult> = {
  "ONVB": {
    code: "ONVB",
    nickname: "온빛",
    summary: "항상 준비된 밝은 개그러! 상황에 맞는 센스와 긍정 에너지가 넘쳐요.",
    description: "체계적으로 준비하고, 상황에 맞는 센스 있는 개그를 구사하며, 주로 말로 표현하고 밝은 분위기를 선호하는 타입입니다.",
    examples: ["유재석", "무한도전", "런닝맨"]
  },
  "ONVD": {
    code: "ONVD", 
    nickname: "온다크",
    summary: "준비된 상황형 블랙코미디러! 센스 있게 어두운 유머를 구사해요.",
    description: "미리 준비하고, 상황에 맞는 개그를 하지만, 블랙코미디나 어두운 유머를 즐기는 타입입니다.",
    examples: ["박명수", "개그콘서트", "코미디빅리그"]
  },
  "ONPB": {
    code: "ONPB",
    nickname: "온표밝",
    summary: "준비된 상황형 표현러! 몸짓과 긍정 에너지로 웃겨요.",
    description: "체계적으로 준비하고, 상황에 맞는 개그를 구사하며, 주로 몸짓과 표정으로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["정형돈", "개그맨", "예능"]
  },
  "ONPD": {
    code: "ONPD",
    nickname: "온표다크", 
    summary: "준비된 상황형 어둠러! 표현력과 블랙코미디의 조화예요.",
    description: "미리 준비하고, 상황에 맞는 개그를 구사하며, 몸짓과 표정으로 표현하지만 어두운 유머를 즐깁니다.",
    examples: ["이수근", "코미디", "예능"]
  },
  "OAVB": {
    code: "OAVB",
    nickname: "오앱밝",
    summary: "준비된 추상형 언어러! 말장난과 밝은 에너지의 조화예요.",
    description: "체계적으로 준비하고, 추상적이거나 엉뚱한 개그를 구사하며, 주로 말로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["김준호", "개그콘서트", "코미디"]
  },
  "OAVD": {
    code: "OAVD",
    nickname: "오앱다크",
    summary: "준비된 추상형 블랙러! 말장난과 어두운 유머의 조화예요.",
    description: "미리 준비하고, 추상적인 개그를 구사하며, 주로 말로 표현하지만 블랙코미디를 즐깁니다.",
    examples: ["박성호", "개그맨", "코미디"]
  },
  "OAPB": {
    code: "OAPB", 
    nickname: "오앱표밝",
    summary: "준비된 추상형 표현러! 독특한 아이디어와 밝은 에너지예요.",
    description: "체계적으로 준비하고, 추상적인 개그를 구사하며, 몸짓과 표정으로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["김병만", "예능", "개그"]
  },
  "OAPD": {
    code: "OAPD",
    nickname: "오앱표다크",
    summary: "준비된 추상형 어둠러! 독특한 표현과 블랙코미디예요.",
    description: "미리 준비하고, 추상적인 개그를 구사하며, 몸짓과 표정으로 표현하지만 어두운 유머를 즐깁니다.",
    examples: ["정준하", "예능", "코미디"]
  },
  "INVB": {
    code: "INVB",
    nickname: "인빛",
    summary: "즉흥 상황형 언어러! 자연스러운 센스와 밝은 에너지예요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 상황에 맞는 센스를 발휘하고, 주로 말로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["하하", "런닝맨", "예능"]
  },
  "INVD": {
    code: "INVD",
    nickname: "인다크",
    summary: "즉흥 상황형 블랙러! 자연스러운 센스와 어두운 유머예요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 상황에 맞는 센스를 발휘하지만 블랙코미디를 즐깁니다.",
    examples: ["길", "예능", "코미디"]
  },
  "INPB": {
    code: "INPB",
    nickname: "인표밝",
    summary: "즉흥 상황형 표현러! 자연스러운 센스와 밝은 표현력이에요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 상황에 맞는 센스를 발휘하고, 몸짓과 표정으로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["양세형", "개그콘서트", "예능"]
  },
  "INPD": {
    code: "INPD",
    nickname: "인표다크",
    summary: "즉흥 상황형 어둠러! 자연스러운 센스와 어두운 표현력이에요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 상황에 맞는 센스를 발휘하고, 몸짓과 표정으로 표현하지만 어두운 유머를 즐깁니다.",
    examples: ["김민교", "개그맨", "코미디"]
  },
  "IAVB": {
    code: "IAVB",
    nickname: "인앱밝",
    summary: "즉흥 추상형 언어러! 독특한 아이디어와 밝은 언어유희예요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 추상적이거나 엉뚱한 개그를 선호하고, 주로 말로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["김구라", "라디오", "예능"]
  },
  "IAVD": {
    code: "IAVD",
    nickname: "인앱다크",
    summary: "즉흥 추상형 블랙러! 독특한 아이디어와 어두운 언어유희예요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 추상적인 개그를 선호하고, 주로 말로 표현하지만 블랙코미디를 즐깁니다.",
    examples: ["김영철", "라디오", "코미디"]
  },
  "IAPB": {
    code: "IAPB",
    nickname: "인앱표밝",
    summary: "즉흥 추상형 표현러! 독특한 아이디어와 밝은 표현력이에요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 추상적인 개그를 선호하고, 몸짓과 표정으로 표현하고 밝은 분위기를 선호합니다.",
    examples: ["박나래", "개그콘서트", "예능"]
  },
  "IAPD": {
    code: "IAPD",
    nickname: "인앱표다크",
    summary: "즉흥 추상형 어둠러! 독특한 아이디어와 어두운 표현력이에요.",
    description: "즉흥적으로 떠오르는 개그를 구사하며, 추상적인 개그를 선호하고, 몸짓과 표정으로 표현하지만 어두운 유머를 즐깁니다.",
    examples: ["김지민", "개그맨", "코미디"]
  }
};

// 답변을 기반으로 축별 점수 계산
export function calculateAxisScores(answers: (number | null)[]): AxisScores {
  const scores: AxisScores = { OI: 0, NB: 0, VP: 0, BD: 0 };
  const counts = { OI: 0, NB: 0, VP: 0, BD: 0 };
  
  // 각 축별로 점수 합산
  answers.forEach((answer, index) => {
    if (answer !== null) {
      const question = questions[index];
      const axis = question.axis as keyof AxisScores;
      scores[axis] += answer;
      counts[axis]++;
    }
  });
  
  // 평균 계산 (1-7점 척도에서 4점을 기준으로)
  Object.keys(scores).forEach((axis) => {
    const axisKey = axis as keyof AxisScores;
    if (counts[axisKey] > 0) {
      scores[axisKey] = scores[axisKey] / counts[axisKey];
    }
  });
  
  return scores;
}

// 축별 점수를 기반으로 개그유형 코드 생성
export function getGagTypeCode(scores: AxisScores): string {
  const code = [
    scores.OI > 4 ? "O" : "I", // Organized vs Improvised
    scores.NB > 4 ? "N" : "A", // Natural vs Abstract
    scores.VP > 4 ? "V" : "P", // Verbal vs Physical
    scores.BD > 4 ? "B" : "D"  // Bright vs Dark
  ].join("");
  
  return code;
}

// 전체 결과 계산 함수
export function calculateResult(answers: (number | null)[]): GagResult {
  const scores = calculateAxisScores(answers);
  const code = getGagTypeCode(scores);
  return gagResults[code] || gagResults["ONVB"]; // 기본값
} 