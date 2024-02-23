export interface IZulipUser {
  email: string;
  user_id: string;
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
  avatar_url: string | null;
}
