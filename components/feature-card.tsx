import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="p-3 rounded-full bg-blue-500/20 text-blue-300">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-white/80 text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
