import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function BookSkeleton() {
  return (
    <Card className="overflow-hidden animate-pulse">
      <div className="aspect-[3/4] w-full bg-gray-200 rounded-t-lg"></div>
      <CardHeader className="pb-2">
        <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>
        <div className="h-6 w-20 bg-gray-200 rounded"></div>
        <div className="h-9 w-full bg-gray-200 rounded"></div>
      </CardContent>
    </Card>
  )
}
