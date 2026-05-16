import { http, HttpResponse } from 'msw';

export const mswHandlers = {
  default: [
    http.get('/api/user', () =>
      HttpResponse.json({
        id: 'user-1',
        name: 'Leandro Rezende',
        email: 'leandro@example.com',
        plan: 'TRIAL',
        trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      })
    ),
    http.get('/api/bands', () =>
      HttpResponse.json([
        { id: 'b1', name: 'The Notion Pulse Band', city: 'São Paulo', genres: ['Rock', 'Pop'] },
        { id: 'b2', name: 'Jazz Collective', city: 'Rio de Janeiro', genres: ['Jazz'] },
      ])
    ),
  ],
};
