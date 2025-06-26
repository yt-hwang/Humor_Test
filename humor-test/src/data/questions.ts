export type Axis = "OI" | "NB" | "VP" | "BD";

export interface Question {
  id: number;
  text: string;
  axis: Axis;
}

export const questions: Question[] = [
  // OI (준비형/즉흥형)
  { id: 1, text: "나는 개그를 할 때 미리 대본이나 아이디어를 준비하는 편이다.", axis: "OI" },
  { id: 2, text: "즉흥적으로 떠오르는 개그가 더 자연스럽고 재미있다고 생각한다.", axis: "OI" },
  { id: 3, text: "개그를 하기 전에 상황을 미리 상상하며 연습한다.", axis: "OI" },
  { id: 4, text: "계획 없이 분위기에 따라 개그를 던지는 것이 내 스타일이다.", axis: "OI" },
  { id: 5, text: "내 개그는 준비된 만큼 더 빛을 발한다.", axis: "OI" },

  // NB (상황형/추상형)
  { id: 6, text: "상황에 맞는 센스 있는 개그가 가장 중요하다고 생각한다.", axis: "NB" },
  { id: 7, text: "추상적이거나 엉뚱한 개그에 더 끌린다.", axis: "NB" },
  { id: 8, text: "상대방의 반응과 맥락을 잘 파악해서 개그를 한다.", axis: "NB" },
  { id: 9, text: "상황과 상관없이 독특한 아이디어로 웃기는 걸 좋아한다.", axis: "NB" },
  { id: 10, text: "내 개그는 현실적인 상황에서 더 잘 통한다.", axis: "NB" },

  // VP (언어형/표현형)
  { id: 11, text: "말장난이나 언어유희를 자주 활용한다.", axis: "VP" },
  { id: 12, text: "표정, 몸짓, 행동 등 비언어적 표현으로 웃기는 걸 즐긴다.", axis: "VP" },
  { id: 13, text: "내 개그는 주로 말로 전달된다.", axis: "VP" },
  { id: 14, text: "과장된 제스처나 표정으로 분위기를 띄운다.", axis: "VP" },
  { id: 15, text: "언어적 설명 없이도 내 개그가 통한다고 생각한다.", axis: "VP" },

  // BD (밝음/어두움)
  { id: 16, text: "밝고 긍정적인 분위기의 개그를 선호한다.", axis: "BD" },
  { id: 17, text: "블랙코미디나 다소 자극적인 유머도 즐긴다.", axis: "BD" },
  { id: 18, text: "내 개그는 모두가 편하게 웃을 수 있는 내용이 많다.", axis: "BD" },
  { id: 19, text: "조금은 어두운 주제나 사회 풍자를 개그에 녹여낸다.", axis: "BD" },
  { id: 20, text: "내 유머는 밝음과 어두움을 자유롭게 넘나든다.", axis: "BD" },
]; 