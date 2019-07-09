import { Category, Color } from '../../shared/enums';

export interface IProduct {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    colors?: Array<Color>;
}
