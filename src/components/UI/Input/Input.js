import React, { useRef, useImperativeHandle } from 'react';
// useImperativeHandle = 컴포넌트나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용할 수 있게 해준다.
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    //객체를 반환해야 하는 함수를 리턴
    return {
      focus: activate,
    };
  });

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []); // 첫 렌더링 1회만 실행

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
