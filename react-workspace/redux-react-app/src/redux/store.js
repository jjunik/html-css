// 스토어(store)
// 애플리케이션의 상태를 저장하는 객체
// 스토어를 생성하려면 createStore를 import 해야함
import {createStore} from 'redux'

// 이 리듀서는 애플리케이션의 상태 변경 로직을 정의한다.
import counterReducer from './reducer'

// createStore 함수를 호춣해 스토어 객체를 생성
// 리듀서 함수를 인자로 전달해 상태 변경 로직을 정의한다.
// 스토어는 애플리케이션 전체의 상태를 관리하고
// 액션이 발생하면 리듀서를 통해 상태를 업데이트 한다.
const store = createStore(counterReducer);

export default store