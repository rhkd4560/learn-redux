This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# learn-redux

### React-redux

#### 1. keyword 정리

**Action**

- 상태에 어떤 변화가 필요하게 될때 Action을 발생
- 객체로 표현됨

```javascript
{
    type: "TOGGLE_VALUE"	//type값은 필수적으로 있어야함
}
```

```react
{
    type: "ADD_TODO",		//todo에 data에있는 것들을 넣겠다는 액션
   	data: {
        id:0,
        text: "리덕스 배우기"
    }
}
```

```react
{
    type: "CHANGE_INPUT",		//Input값을 "안녕하세요"로 바꾸겠다는 액션
   	text: "안녕하세요"
}
```

**Action Creator(액션 생성함수)**

- 필수 적은 아니다.
- 하지만 액션 생성함수를 만들어 놓으면 객체를 구현하기 쉽다.

```react
export function addtodo(data){
    return{
        type: "ADD_TODO",
        data
    };
}

//화살표 함수로도 만들 수 있습니다.
export const changeInput = text => ({
    type: "CHANGE_INPUT",
    text
});
```

**Reducer**

- 변화를 일으키는 함수
- 두가지 파라미터를 가져옴 (state, action)
- action의 type에 따라서 다른 작업을 함
- 기존의 것을 건들이는 것이 아니라 새로운 것을 만들어서 변환 작업 후 리턴해줘야한다.

```javascript
function counter(state, action){
    switch (action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}
```



**Store(스토어)**

- 한 Application 당 하나의 Store를 만들게 된다.
- Store안에는 현재 앱의 상태와 reducer가 들어있고 추가적인 몇가지 내장 함수가 존재 함



**dispatch(디스패치)**

- 몇가지 내장 함수 중 하나
- action을 발생 시키는 것
- action을 스토어에 전달 한다.

```javascript
dispatch({
    type: 'INCREASE'
})
```



**subscribe (구독)**

- Store의 내장함수 중 하나
- 파라미터로 특정 함수를 넣어주면 액션이 dispatch될때마다 우리가 설정한 함수가 호출됨
- ex) Store의 상태가 업데이트 될 때 마다 특정 함수를 호출 할 수 있다.



#### 2. Redux의 3가지 규칙

- 하나의 애플리케이션엔 하나의 스토어가 있다.
  - 하나이상의 스토어는 만드는 것은 권장하지 않는다.
  - 개발자 도구를 제대로 활용할수가 없다.
- 상태는 읽기전용 이다.
  - 불변성을 지켜줘야한다.
  - ex) 객체가 있다면 그 객체를 복사하여 특정 값을 덮어씌워야한다.
  - concat같은 내장함수를 사용해야한다.
  - 좋은 성능을 지키기 위함
- 변화를 일으키는 함수 리듀서는 순수한 함수여야 합니다.
  - 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받습니다.
  - 이전의 상태는 절대로 변경하지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
  - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 합니다.
  - 즉, 동일한 인풋 -> 동일한 아웃풋

### 3. ducks 패턴

- 액션타입 액션생성함수 리듀서를 한 파일에 다 처리하는 것
- 리덕스 모듈이라고 함

### 4. HOC

- 재사용되는 값, 함수를 Props로 받아올 수 있게 해주는 옛날 패턴
- 현재는 Hook이 이 자리를 차지했음
