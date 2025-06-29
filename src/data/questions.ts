export type Axis = "OI" | "NB" | "VP" | "BD";

export interface Question {
  id: number;
  text: string;
  axis: Axis;
  reverse?: boolean;
}

export const questions: Question[] = [
  // 섞인 순서로 재배열 (각 축별로 골고루 분산)
  { id: 1, text: "나는 개그콘서트, 웃찾사, 코미디 빅리그가 무한도전, 1박2일, 신서유기, 지구오락실보다 재밌다.", axis: "OI", reverse: false },
  { id: 2, text: "병맛보다 상황에 맞는 센스가 가장 중요하다고 생각한다.", axis: "NB", reverse: false },
  { id: 3, text: "호통개그나 다크한 분위기의 개그가 밝고 유쾌한 개그보다 웃기다.", axis: "BD", reverse: false },
  { id: 4, text: "말장난이나 언어유희를 좋아한다.", axis: "VP", reverse: false },
  { id: 5, text: "즉흥적으로 떠오르는 개그가 더 자연스럽고 재미있다고 생각한다.", axis: "OI", reverse: true },
  { id: 6, text: "고차원적이거나 엉뚱한 개그에 더 끌린다.", axis: "NB", reverse: true },
  { id: 7, text: "표정, 몸짓, 행동 등의 표현으로 웃기는 걸 즐긴다.", axis: "VP", reverse: true },
  { id: 8, text: "김구라, 이경규, 박명수의 개그가 웃기다.", axis: "BD", reverse: true },
  { id: 9, text: "나는 성대모사 장인보다 즉석 N행시 장인이 되고싶다.", axis: "OI", reverse: false },
  { id: 10, text: "상대방의 반응과 맥락을 잘 파악한 개그가 웃기다.", axis: "NB", reverse: false },
  { id: 11, text: "나는 말을 통해 타이밍이나 표현을 세밀하게 조절하는 개그가 재밌다.", axis: "VP", reverse: false },
  { id: 12, text: "내가 좋아하는 개그는 모두가 편하게 웃을 수 있는 내용이 많다.", axis: "BD", reverse: false },
  { id: 13, text: "계획 없이 분위기에 따라 드립을 치는 것이 내 스타일이다.", axis: "OI", reverse: true },
  { id: 14, text: "계연성이나 현실성성과 상관없이 독특한 아이디어로 웃기는 개그를 좋아한다.", axis: "NB", reverse: true },
  { id: 15, text: "과장된 제스처나 표정으로 분위기를 띄우는 것이 좋다.", axis: "VP", reverse: true },
  { id: 16, text: "조금은 어두운 주제나 사회 풍자를 개그에 녹여내는 것이 센스있게 느껴진다.", axis: "BD", reverse: true },
  { id: 17, text: "나는 남을 웃기기 위해 사전에 성대모사, 드립, 혹은 웃긴 썰을 준비하는 것을 좋아한다.", axis: "OI", reverse: false },
  { id: 18, text: "내 현실적인 상황을 웃기게 풀어내는 것을 더 좋아한다.", axis: "NB", reverse: false },
  { id: 19, text: "몸개그가 말장난 보다 재밌다.", axis: "VP", reverse: true },
  { id: 20, text: "내 유머는 밝음과 어두움을 자유롭게 넘나든다.", axis: "BD", reverse: false },
]; 