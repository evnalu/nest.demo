import {
  Column,
  Table,
  PrimaryKey,
  Index,
  AutoIncrement,
  AllowNull,
  Model,
  DataType,
} from 'sequelize-typescript';
import { tablePrefix } from '../../../shared/constants';

@Table({ tableName: `${tablePrefix.demo}users` })
export class UserModel extends Model<UserModel> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ field: 'user_id' })
  id: number;

  @Column({ field: 'user_name' })
  @Index
  name: string;

  @Column({ field: 'user_username', unique: true, allowNull: false })
  @Index
  username: string;

  @Column({ field: 'user_date', defaultValue: DataType.NOW })
  date: Date;

  @Column({ field: 'user_date_gmt', defaultValue: DataType.NOW })
  @Index
  date_gmt: Date;

  @Column({ field: 'user_email', unique: true, allowNull: false })
  @Index
  email: string;

  @Column({ field: 'user_avatar_filename' })
  avatar: string;
}