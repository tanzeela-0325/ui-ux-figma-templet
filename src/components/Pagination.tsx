import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  
  export function PaginationDemo() {
    return (
      <Pagination>
        <PaginationContent className="flex w-full flex-row justify-between">
          <div>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          </div>

          <div className="flex">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          </div>


          <div>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
          </div>
        </PaginationContent>
      </Pagination>
    )
  }
  