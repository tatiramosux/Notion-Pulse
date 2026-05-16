'use client';

import Link from 'next/link';
import { Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { hasAccess } from '@/types';
import type { User } from '@/types';

interface PaywallGateProps {
  user: Pick<User, 'plan' | 'trialEndsAt' | 'stripeCurrentPeriodEnd'>;
  feature?: string;
  description?: string;
  children: React.ReactNode;
}

export function PaywallGate({ user, feature = 'este recurso', description, children }: PaywallGateProps) {
  if (hasAccess(user)) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle>Acesso bloqueado</CardTitle>
          <CardDescription>
            {description ?? `Faça upgrade para acessar ${feature} e todos os recursos PRO.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-left space-y-2 text-muted-foreground">
            {[
              'Orçamentos automáticos ilimitados',
              'Follow-ups inteligentes',
              'Agenda profissional completa',
              'CRM visual avançado',
              'Contratos e pagamentos digitais',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Zap className="h-3 w-3 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button asChild className="w-full">
            <Link href="/settings/billing">
              <Zap className="mr-2 h-4 w-4" />
              Fazer upgrade — R$ 97/mês
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">Cancele a qualquer momento</p>
        </CardFooter>
      </Card>
    </div>
  );
}
