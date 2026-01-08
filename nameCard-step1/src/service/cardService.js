import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
// 명함 카드 데이터를 Firebase DB에 저장/삭제/실시간 동기화하는 클래스
class CardLogic {// 클래스 선언
  constructor(app){//생성자 함수
    //getDatabase(app)로 RealtimeDatabase인스턴스를 얻어옴
    //this가 붙은 전변이다.다른 메서드에서 재사용 가능
    this.db = getDatabase(app);
  }
  // 특정한 userId의 cards데이터를 실시간 동기화로 지속적으로 받아오기
  // userId : 로그인한 사용자 아이디(uid)
  // onUpdate : 콜백함수 - DB에서 받은 최신 데이터를 React state에 반영해주는 함수
  syncCards(userId, onUpdate) {
    //DB에서 읽을 위치 정보
    const query = ref(this.db, `${userId}/cards`);
    // 해당 경로의 데이터가 변경될 때마다 자동으로 실행됨(실시간)
    onValue(query, (snapshot) => {
      // 데이터를 받아오기
      const value = snapshot.val();
      // value가 있으면 onUpdate호출해서 화면 상태를 갱신 - 구독하기
      value && onUpdate(value);
    });
    //중요 : 리스너 해제 (unsubscribe패턴)
    // clean-up 할 때 필요한 문장임
    return () => off(query);
  }
//https://firebase.google.com/docs/database/web/read-and-write?authuser=0
  //목적 : 한 장의 명함카드 정보를 DB에 저장
  // id에 해당하는 값이 존재하면 수정해주고 id값이 존재하지 않으면 새로 등록해줌
  // 결론 : 입력과 수정이 하나의 함수로 처리가 가능함.
  // card.id를 키로 해서 /cards/{card.id} 위치에 저장함
  // 만일 같은 id로 다시 저장하면 수정 효과가 발생함.
  saveCard(userId, card) {
    
    set(ref(this.db, `${userId}/cards/${card.id}`), card)
    .then(() => {
      console.log('저장성공');
    }).catch((error)=> {
      console.log('저장 실패!!!');
    })
  }
  //데이터 삭제 - 해당 데이터 위치의 참조에 remove()를 호출한다
  // 특정 카드 1개 삭제
  // remove함수의 ref 위치의 데이터 자체를 제거함.
  removeCard(userId, card){
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
}

export default CardLogic;