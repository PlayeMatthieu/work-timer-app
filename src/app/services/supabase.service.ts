import {Injectable} from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js'
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

  public supaBase: SupabaseClient;

  public initSupaBase() {
    this.supaBase = createClient(environment.supaBaseURL, environment.supaBaseKey);
  }
}
