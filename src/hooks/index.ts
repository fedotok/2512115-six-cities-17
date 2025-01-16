import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types';


const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<State> = useSelector;


export {useAppDispatch, useAppSelector};
