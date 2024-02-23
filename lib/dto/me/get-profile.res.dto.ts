export interface GetProfileResDto {
  result: string;
  msg: string;
  email: string;
  user_id: number;
  avatar_version: number;
  is_admin: boolean;
  is_owner: boolean;
  is_guest: boolean;
  is_billing_admin: boolean;
  role: number;
  is_bot: boolean;
  full_name: string;
  timezone: string;
  is_active: boolean;
  date_joined: string;
  delivery_email: string;
  avatar_url: string;
  profile_data: object;
  max_message_id: number;
}
