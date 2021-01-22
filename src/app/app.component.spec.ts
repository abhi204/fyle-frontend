import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { bankComponent } from './bank/Components/to-do.component';
import bankState, { initializeState } from './bank/bank.state';

describe('AppComponent', () => {
  const initialState = initializeState();
  let store: MockStore<{ banks: bankState }>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, bankComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
      .then(() => {
        store = TestBed.get<Store<{ banks: bankState }>>(Store);
      });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
