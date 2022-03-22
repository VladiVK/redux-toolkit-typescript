import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

// Все это лишь для комфортной работы с типами!!!

// по сути обычный dipatch + типизация
export const useAppDispatch = () => useDispatch<AppDispatch>();

// типизированный селектор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
